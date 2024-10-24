import './reactflow.css';

import React from 'react';
import { Handle, BaseEdge, useStore, Position, getBezierPath } from '@xyflow/react';

import { style } from '@mui/system';
import { Box, Typography } from '@mui/material';

// Modified edge calculation functions to target the image center
export function getNodeIntersection(intersectionNode, targetNode) {
  const imageWidth = 110; // Image width
  const imageHeight = 110; // Image height

  const intersectionNodePosition = intersectionNode.internals.positionAbsolute;
  const targetPosition = targetNode.internals.positionAbsolute;

  const sourceX = intersectionNodePosition.x + imageWidth / 2;
  const sourceY = intersectionNodePosition.y + imageHeight / 2;
  const targetX = targetPosition.x + imageWidth / 2;
  const targetY = targetPosition.y + imageHeight / 2;

  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const angle = Math.atan2(dy, dx);

  const radius = imageWidth / 2;
  const x = sourceX + Math.cos(angle) * radius;
  const y = sourceY + Math.sin(angle) * radius;

  return { x, y };
}

export function getEdgePosition(node, intersectionPoint) {
  const imageWidth = 110;
  const imageHeight = 110;
  const centerX = node.internals.positionAbsolute.x + imageWidth / 2;
  const centerY = node.internals.positionAbsolute.y + imageHeight / 2;

  const dx = intersectionPoint.x - centerX;
  const dy = intersectionPoint.y - centerY;
  const angle = Math.atan2(dy, dx);

  const degrees = ((angle * 180) / Math.PI + 360) % 360;

  if (degrees >= 315 || degrees < 45) return Position.Right;
  if (degrees >= 45 && degrees < 135) return Position.Bottom;
  if (degrees >= 135 && degrees < 225) return Position.Left;
  return Position.Top;
}

export function getEdgeParams(source, target) {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
  const targetPos = getEdgePosition(target, targetIntersectionPoint);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  };
}

const FloatingEdge = ({ source, target, markerEnd }) => {
  const sourceNode = useStore((store) => store.nodeInternals.get(source));
  const targetNode = useStore((store) => store.nodeInternals.get(target));

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);
  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
  });

  return <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />;
};

const CustomNode = ({ data }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '150px',
      height: '150px',
    }}
  >
    <Box
      sx={{
        position: 'relative',
        width: '110px',
        height: '110px',
      }}
    >
      <img
        src={data.icon}
        alt="Node Icon"
        style={{
          width: '110px',
          height: '110px',
          position: 'relative',
          zIndex: 1,
        }}
      />
      <Handle
        type="source"
        position="bottom"
        style={{
          bottom: '0px',
          opacity: 1,
          zIndex: 2,
          width: '16px',
          height: '16px',
          background: 'transparent',
          border: 'none',
        }}
      />
      <Handle
        type="target"
        position="top"
        style={{
          top: '0px',
          opacity: 1,
          zIndex: 2,
          width: '16px',
          height: '16px',
          background: 'transparent',
          border: 'none',
        }}
      />
    </Box>
    <Typography variant="h6" align="center" sx={{ marginTop: '5px' }}>
      {data.label}
    </Typography>
  </Box>
);

// Adjust the layout functions to handle horizontal and vertical toggling
export function createNodesAndEdges() {
  const nodes = [
    {
      id: '1',
      position: { x: 250, y: 100 },
      data: { label: 'Jotform', subtext:"New Response", icon: '/assets/images/reactflow/Jotform.svg' },
      type: 'custom',
    },
    {
      id: '2',
      position: { x: 250, y: 300 },
      data: {
        label: 'Google Docs',
        subtext: 'Append Text to Document',
        icon: '/assets/images/reactflow/docs.svg',
      },
      type: 'custom',
    },
    {
      id: '3',
      position: { x: 250, y: 500 },
      data: {
        label: 'Router (Pabbly)',
        subtext: 'Split Into Routes',
        icon: '/assets/images/reactflow/router.svg',
      },
      type: 'custom',
    },
    {
      id: '4',
      position: { x: 500, y: 700 },
      data: {
        label: 'Chat Gpt',
        subtext: 'Append Text to Document',
        icon: '/assets/images/reactflow/chatgpt.svg',
      },
      type: 'custom',
    },
    {
      id: '5',
      position: { x: 0, y: 700 },
      data: {
        label: 'Gmail',
        subtext: 'Incoming Messages',
        icon: '/assets/images/reactflow/mail.svg',
      },
      type: 'custom',
    },
    {
      id: '6',
      position: { x: 0, y: 700 },
      data: {
        label: 'Hubspot',
        subtext: 'Create Contact',
        icon: '/assets/images/reactflow/hubspot.svg',
      },
      type: 'custom',
    },
    {
      id: '7',
      position: { x: 0, y: 700 },
      data: { label: 'Router (Pabbly)',subtext:"Split Into Routes", icon: '/assets/images/reactflow/router.svg' },
      type: 'custom',
    },
    {
      id: '8',
      position: { x: 0, y: 700 },
      data: { label: 'Javascript',subtext:"Extract Data", icon: '/assets/images/reactflow/js.svg' },
      type: 'custom',
    },
    {
      id: '9',
      position: { x: 0, y: 700 },
      data: { label: 'Router (Pabbly)',subtext:"Split Into Routes", icon: '/assets/images/reactflow/router.svg' },
      type: 'custom',
    },
    {
      id: '10',
      position: { x: 0, y: 700 },
      data: { label: 'MySql',subtext:"Add New Row", icon: '/assets/images/reactflow/mysql.svg' },
      type: 'custom',
    },
    {
      id: '11',
      position: { x: 0, y: 700 },
      data: { label: 'Google Sheets',subtext:"Append Text to Document", icon: '/assets/images/reactflow/sheets.svg' },
      type: 'custom',
    },
    {
      id: '12',
      position: { x: 0, y: 800 },
      data: { label: 'Google Docs', subtext:"Append Text to Document",icon: '/assets/images/reactflow/docs.svg' },
      type: 'custom',
    },
  ];

  const edges = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'floating',
      animated: true,

      // markerEnd: {
      //   type: MarkerType.ArrowClosed,
      //   width: 20,
      //   height: 20,
      //   color: '#007bff',
      // },
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      type: 'floating',
      animated: true,
      // markerEnd: {
      //   type: MarkerType.ArrowClosed,
      //   width: 20,
      //   height: 10,
      //   color: '#007bff',
      // },
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      type: 'floating',
      animated: true,
      // markerEnd: {
      //   type: MarkerType.ArrowClosed,
      //   width: 20,
      //   height: 10,
      //   color: '#007bff',
      // },
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e4-5',
      source: '4',
      target: '5',
      type: 'floating',
      animated: true,
      // markerEnd: {
      //   type: MarkerType.ArrowClosed,
      //   width: 20,
      //   height: 10,
      //   color: '#007bff',
      // },
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e3-6',
      source: '3',
      target: '6',
      type: 'floating',
      animated: true,
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e6-7',
      source: '6',
      target: '7',
      type: 'floating',
      animated: true,
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e7-8',
      source: '7',
      target: '8',
      type: 'floating',
      animated: true,
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e7-12',
      source: '7',
      target: '12',
      type: 'floating',
      animated: true,
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e8-9',
      source: '8',
      target: '9',
      type: 'floating',
      animated: true,
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e9-10',
      source: '9',
      target: '10',
      type: 'floating',
      animated: true,
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
    {
      id: 'e9-11',
      source: '9',
      target: '11',
      type: 'floating',
      animated: true,
      style: {
        strokeWidth: 3,
        stroke: '#637381',
      },
    },
  ];

  return { nodes, edges };
}

// Get layout based on the vertical orientation
export function getVerticalLayout(nodes) {
  return nodes.map((node, index) => {
    const yOffset = 2000;
    return {
      ...node,
      position: {
        x: 300, // Fixed x position
        y: 350 + index * yOffset,
      },
    };
  });
}

// Get layout based on the horizontal orientation
export function getHorizontalLayout(nodes) {
  return nodes.map((node, index) => {
    const xOffset = 300;
    return {
      ...node,
      position: {
        x: -300 + index * xOffset, // Fixed y position
        y: 350,
      },
    };
  });
}

// Floating connection line component
// export function FloatingConnectionLine({ fromX, fromY, toX, toY, connectionLineStyle }) {
//   return (
//     <g>
//       <path
//         fill="none"
//         stroke="#007bff"
//         strokeWidth={2}
//         className="animated"
//         d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
//         style={connectionLineStyle}
//       />
//       <circle cx={toX} cy={toY} fill="#007bff" r={5} stroke="#fff" strokeWidth={1.5} />
//     </g>
//   );
// }

export default FloatingEdge;
