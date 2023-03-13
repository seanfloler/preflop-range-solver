import RFIVs3Bet from 'src/app/pages/RFIVs3Bet.page';
import Home from 'src/app/pages/Home.page';
import { Route, RouteProps } from 'react-router-dom';
import React from 'react';
import { Box } from '@mui/material';
import RangeViewer from 'src/app/components/RangeViewer/RangeViewer';
import { FacingRFIImageMap, RFIPositionImageMap } from './images.config';
import { RFIPositions, FacingRFIPositions } from 'src/app/models/positions';
import { Position } from 'src/app/models/position';
import FlowSelectionPage from 'src/app/pages/FlowSelection.page';

export interface RouteConfig {
  path: string;
  element: React.ReactElement<RouteProps>;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/rfi',
    element: (
      <FlowSelectionPage routePath="/rfi" flows={RFIPositions as string[]} />
    ),
    children: [
      ...Object.keys(RFIPositionImageMap).map((position) => ({
        path: `/${position}`,
        element: (
          <RangeViewer
            imageSrc={
              RFIPositionImageMap[position as Exclude<Position, Position.BB>]
            }
            alt={position as Position}
            ranges={RFIPositions}
            parentRoute="/rfi"
          />
        ),
      })),
    ],
  },
  {
    path: '/vs-rfi',
    element: (
      <FlowSelectionPage
        routePath="/vs-rfi"
        flows={FacingRFIPositions as string[]}
      />
    ),
    children: [
      ...Object.keys(FacingRFIImageMap).map((position) => ({
        path: `/${position}`,
        element: (
          <FlowSelectionPage
            routePath={`/vs-rfi/${position}`}
            flows={Object.keys(
              FacingRFIImageMap[position as Exclude<Position, Position.UTG>]
            )}
          />
        ),
        children: [
          ...Object.keys(
            FacingRFIImageMap[position as Exclude<Position, Position.UTG>]
          ).map((facingRFIKey) => {
            return {
              path: `/${facingRFIKey.replace(/ /g, '_')}`,
              element: (
                <RangeViewer
                  imageSrc={
                    FacingRFIImageMap[
                      position as Exclude<Position, Position.UTG>
                    ][facingRFIKey]
                  }
                  alt={facingRFIKey}
                  ranges={Object.keys(
                    FacingRFIImageMap[
                      position as Exclude<Position, Position.UTG>
                    ]
                  )}
                  parentRoute={`/vs-rfi/${position}`}
                />
              ),
            };
          }),
        ],
      })),
    ],
  },
  {
    path: '/rfi-vs-3bet',
    element: <RFIVs3Bet />,
  },
];

export function renderRoutes(routes: RouteConfig[], parentPath = '') {
  return routes.map(({ path, element, children }) => (
    <React.Fragment key={path}>
      <Route
        key={path}
        path={parentPath + path}
        element={<Box paddingY={2}>{element}</Box>}
      />
      {children && renderRoutes(children, parentPath + path)}
    </React.Fragment>
  ));
}

export default routes;
