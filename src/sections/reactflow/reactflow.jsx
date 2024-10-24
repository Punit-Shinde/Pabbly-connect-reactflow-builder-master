import './reactflow.css';
import '@xyflow/react/dist/style.css';

import ELK from 'elkjs/lib/elk.bundled';
import React, { useState, useCallback, useLayoutEffect } from 'react';
import {
  Handle,
  MiniMap,
  addEdge,
  Controls,
  ReactFlow,
  MarkerType,
  useReactFlow,
  useNodesState,
  useEdgesState,
  // Panel,
  ReactFlowProvider,
} from '@xyflow/react';

import { Box, IconButton, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

import FloatingEdge from './floating-edge';
import { createNodesAndEdges } from './utils';
import FloatingConnectionLine from './floating-connection-line';

const elk = new ELK();

const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': '100', // spacing between nodes
  'elk.spacing.nodeNode': '100',
};

// Define edge types outside the component
const edgeTypes = {
  floating: FloatingEdge,
};

// Custom Node Component
const CustomNode = ({ data }) => (
  <>
    <Handle type="target" position="top" />
    <Box display="flex" alignItems="center" width='300px' gap='8px'>
      <img
        src={data.icon}
        height="110px"
        width="110px"
        alt="Node"
        style={{ position: 'relative', zIndex: 1 }}
      />{' '}
      <Box width="100%">
        {/* {data.label} */}
        <Typography fontSize="22px" fontWeight="700" color="#1C252E" align="left" noWrap>
        {data.label}
        </Typography>
        <Typography fontSize="18px" fontWeight="400" color="#556370" align="left" noWrap>
          {data.subtext}
        </Typography>
      </Box>
    </Box>
    <Handle type="source" position="bottom" />
  </>
);

// Define node types outside the component
const nodeTypes = {
  custom: CustomNode,
};

const getLayoutedElements = (nodes, edges, options = {}) => {
  const isHorizontal = options?.['elk.direction'] === 'RIGHT';
  const graph = {
    id: 'root',
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      width: 150,
      height: 150,
    })),
    edges,
  };

  return elk
    .layout(graph)
    .then((layoutedGraph) => ({
      nodes: layoutedGraph.children.map((node) => ({
        ...node,
        position: { x: node.x, y: node.y },
      })),
      edges: layoutedGraph.edges,
    }))
    .catch(console.error);
};

const FlowChartContent = () => {
  const [isVertical, setIsVertical] = useState(true);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { fitView } = useReactFlow();

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'floating',
            markerEnd: { type: MarkerType.Arrow },
          },
          eds
        )
      ),
    [setEdges]
  );

  const onLayout = useCallback(
    (direction) => {
      const opts = {
        'elk.direction': direction,
        ...elkOptions,
      };

      getLayoutedElements(nodes, edges, opts).then(
        ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
          setNodes(layoutedNodes);
          setEdges(layoutedEdges);
          window.requestAnimationFrame(() => fitView());
        }
      );
    },
    [nodes, edges, setNodes, setEdges, fitView]
  );

  const toggleOrientation = useCallback(() => {
    setIsVertical((prev) => {
      const newIsVertical = !prev;
      onLayout(newIsVertical ? 'DOWN' : 'RIGHT');
      return newIsVertical;
    });
  }, [onLayout]);

  useLayoutEffect(() => {
    const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges();
    setNodes(initialNodes);
    setEdges(initialEdges);

    const opts = {
      'elk.direction': 'DOWN',
      ...elkOptions,
    };

    getLayoutedElements(initialNodes, initialEdges, opts).then(
      ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
        setNodes(layoutedNodes);
        setEdges(layoutedEdges);
        window.requestAnimationFrame(() => fitView());
      }
    );
  }, [setNodes, setEdges, fitView]);

  return (
    <div style={{ height: 800, width: '100%', position: 'relative' }} className="floatingedges">
      <Box sx={{ position: 'absolute', left: 12, bottom: 140, zIndex: 1000 }}>
        <IconButton
          onClick={toggleOrientation}
          sx={{
            '&:hover': { bgcolor: '#343B57' },
            boxShadow: 1,
            width: 40,
            height: 40,
            zIndex: 1000,
            border:'2px',
            borderColor:'#343B57'
          }}
        >
          <Iconify
            icon="dashicons:image-rotate-left"
            width={20}
            sx={{
              transform: isVertical ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </IconButton>
      </Box>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        edgeTypes={edgeTypes}
        connectionLineComponent={FloatingConnectionLine}
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

// Wrapper component that provides the ReactFlow context
export default function FlowChart() {
  return (
    <ReactFlowProvider>
      <FlowChartContent />
    </ReactFlowProvider>
  );
}
