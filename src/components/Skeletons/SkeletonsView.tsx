// Functional Component
import { FC } from "react";

// Styled Elements
import { SkeletonBox } from "./Skeletons.styles";

// MUI Elements
import { Skeleton } from "@mui/material";

// Types
import { SkeletonProps } from "../../store/types";

const Skeletons: FC<SkeletonProps> = ({ flag, width, height }) => {
  return (
    <>
      {
        {
          1: (
            <>
              <SkeletonBox data-testid='skeletons'>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={width}
                  height={height}
                />
              </SkeletonBox>
              <SkeletonBox>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={width}
                  height={height}
                />
              </SkeletonBox>
              <SkeletonBox>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={width}
                  height={height}
                />
              </SkeletonBox>
              <SkeletonBox>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={width}
                  height={height}
                />
              </SkeletonBox>
              <SkeletonBox>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={width}
                  height={height}
                />
              </SkeletonBox>
              <SkeletonBox>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={width}
                  height={height}
                />
              </SkeletonBox>
            </>
          ),
        }[flag]
      }
    </>
  );
};

export default Skeletons;
