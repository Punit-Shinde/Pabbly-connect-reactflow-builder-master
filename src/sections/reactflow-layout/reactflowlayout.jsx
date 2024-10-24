// import { initialEdges, initialNodes } from './edges';
// import ELK from 'elkjs/lib/elk.bundled.js';
// import React, { useCallback, useLayoutEffect } from 'react';
// import {
//   ReactFlow,
//   ReactFlowProvider,
//   addEdge,
//   Panel,
//   useNodesState,
//   useEdgesState,
//   useReactFlow,
// } from '@xyflow/react';

// import '@xyflow/react/dist/style.css';

// const elk = new ELK();

// // Elk has a *huge* amount of options to configure. To see everything you can
// // tweak check out:
// //
// // - https://www.eclipse.org/elk/reference/algorithms.html
// // - https://www.eclipse.org/elk/reference/options.html
// const elkOptions = {
//   'elk.algorithm': 'layered',
//   'elk.layered.spacing.nodeNodeBetweenLayers': '100',
//   'elk.spacing.nodeNode': '80',
// };

// const getLayoutedElements = (nodes, edges, options = {}) => {
//   const isHorizontal = options?.['elk.direction'] === 'RIGHT';
//   const graph = {
//     id: 'root',
//     layoutOptions: options,
//     children: nodes.map((node) => ({
//       ...node,
//       // Adjust the target and source handle positions based on the layout
//       // direction.
//       targetPosition: isHorizontal ? 'left' : 'top',
//       sourcePosition: isHorizontal ? 'right' : 'bottom',

//       // Hardcode a width and height for elk to use when layouting.
//       width: 150,
//       height: 50,
//     })),
//     edges: edges,
//   };

//   return elk
//     .layout(graph)
//     .then((layoutedGraph) => ({
//       nodes: layoutedGraph.children.map((node) => ({
//         ...node,
//         // React Flow expects a position property on the node instead of `x`
//         // and `y` fields.
//         position: { x: node.x, y: node.y },
//       })),

//       edges: layoutedGraph.edges,
//     }))
//     .catch(console.error);
// };

// function LayoutFlow() {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const { fitView } = useReactFlow();

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [],
//   );
//   const onLayout = useCallback(
//     ({ direction, useInitialNodes = false }) => {
//       const opts = { 'elk.direction': direction, ...elkOptions };
//       const ns = useInitialNodes ? initialNodes : nodes;
//       const es = useInitialNodes ? initialEdges : edges;

//       getLayoutedElements(ns, es, opts).then(
//         ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
//           setNodes(layoutedNodes);
//           setEdges(layoutedEdges);

//           window.requestAnimationFrame(() => fitView());
//         },
//       );
//     },
//     [nodes, edges],
//   );

//   // Calculate the initial layout on mount.
//   useLayoutEffect(() => {
//     onLayout({ direction: 'DOWN', useInitialNodes: true });
//   }, []);

//   return (
//     <ReactFlow
//       nodes={nodes}
//       edges={edges}
//       onConnect={onConnect}
//       onNodesChange={onNodesChange}
//       onEdgesChange={onEdgesChange}
//       fitView
//     >
//       <Panel position="top-right">
//         <button onClick={() => onLayout({ direction: 'DOWN' })}>
//           vertical layout
//         </button>

//         <button onClick={() => onLayout({ direction: 'RIGHT' })}>
//           horizontal layout
//         </button>
//       </Panel>
//     </ReactFlow>
//   );
// }

// export default () => (
//   <ReactFlowProvider>
//     <LayoutFlow />
//   </ReactFlowProvider>
// );

import '@xyflow/react/dist/style.css';

import ELK from 'elkjs/lib/elk.bundled';
import React, { useEffect, useCallback } from 'react';
import {
  Panel,
  addEdge,
  ReactFlow,
  useReactFlow,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from '@xyflow/react';

import { initialEdges, initialNodes } from './edges';

const elk = new ELK();

const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': '100',
  'elk.spacing.nodeNode': '80',
};

const getLayoutedElements = async (nodes, edges, options = {}) => {
  const isHorizontal = options?.['elk.direction'] === 'RIGHT';
  const graph = {
    id: 'root',
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      width: 150,
      height: 50,
    })),
    edges,
  };

  try {
    const layoutedGraph = await elk.layout(graph);
    return {
      nodes: layoutedGraph.children.map((node) => ({
        ...node,
        position: { x: node.x, y: node.y },
      })),
      edges: layoutedGraph.edges,
    };
  } catch (error) {
    console.error(error);
    return { nodes, edges };
  }
};

function LayoutFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { fitView, setNodes: setEdgeNodes } = useReactFlow();

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onLayout = useCallback(
    ({ direction, useInitialNodes = false }) => {
      const opts = { 'elk.direction': direction, ...elkOptions };
      const ns = useInitialNodes ? initialNodes : nodes;
      const es = useInitialNodes ? initialEdges : edges;

      getLayoutedElements(ns, es, opts).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
        setNodes(layoutedNodes);
        setEdges(layoutedEdges);

        window.requestAnimationFrame(() => fitView());
      });
    },
    [nodes, edges, setNodes, setEdges, fitView]
  );

  useEffect(() => {
    onLayout({ direction: 'DOWN', useInitialNodes: true });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Panel position="top-right">
        <button type="button" onClick={() => onLayout({ direction: 'DOWN' })}>
          vertical layout
        </button>

        <button type="button" onClick={() => onLayout({ direction: 'RIGHT' })}>
          horizontal layout
        </button>
      </Panel>
    </ReactFlow>
  );
}

export default function LayoutFlowWrapper() {
  return (
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  );
}
