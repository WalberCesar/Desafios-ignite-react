import { ComponentProps } from "@stitches/react";
import { ProductSkeletonContainer, SkeletonItem } from "./index.style";

type ProductSkeletonProps = ComponentProps<typeof ProductSkeletonContainer>;

export function ProductSkeleton({ ...rest }: ProductSkeletonProps) {
  return (
    <ProductSkeletonContainer {...rest}>
      <SkeletonItem />
      <div>
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </ProductSkeletonContainer>
  );
}
