/* eslint-disable @typescript-eslint/no-explicit-any */
import { GrPowerReset } from "react-icons/gr";
import ProductCard from "../components/card/ProductCard";
import PageCover from "../components/pageCover/PageCover";
import FilterByBrand from "../components/products/filter/FilterByBrand";
import FilterByCategories from "../components/products/filter/FilterByCategories";
import FilterByPrice from "../components/products/filter/FilterByPrice";
import FilterBySearch from "../components/products/filter/FilterBySearch";
import SortProduct from "../components/products/filter/SortProduct";
import { Button } from "../components/ui/button";
import { ProductCardLoader } from "../components/ui/loader/ProductCardLoader";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { resetFilter } from "../redux/features/filterProducts/filterSlice";
import { useGetProductsQuery } from "../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IProduct } from "../types/product.type";

const Products = () => {
  const dispatch = useAppDispatch();
  const filterBy = useAppSelector((state) => state.filter);
  const { brand, category, price, search, sort } = filterBy;

  const { data, isLoading, isError, error } = useGetProductsQuery(filterBy);

  let content = null;

  if (isLoading) {
    content = Array.from({ length: 8 }).map((_, index) => (
      <ProductCardLoader key={index} />
    ));
  } else if (!isLoading && isError) {
    content = (
      <h1 className="col-span-4 text-3xl font-bold text-gray-900">
        {(error as any)?.data?.message}
      </h1>
    );
  } else if (!isLoading && !error && data?.data?.length === 0) {
    content = (
      <h1 className="col-span-4 text-lg text-center  py-5 h-fit rounded-md  text-rose-600">
        No Products Found!
      </h1>
    );
  } else {
    content = data?.data?.map((product: IProduct) => (
      <ProductCard key={product._id} productDetails={product} />
    ));
  }

  return (
    <div>
      <PageCover title="Products" />
      <div className="px-[10%]  py-16 grid grid-cols-12 gap-6">
        <div className="col-span-3 space-y-7">
          {(brand || category || price || search || sort) && (
            <Button
              className="-mb-10"
              size="sm"
              variant="outline"
              onClick={() => dispatch(resetFilter())}
            >
              <GrPowerReset className="mr-1" /> Reset Filter
            </Button>
          )}
          <FilterByCategories />
          <FilterByPrice />
          <FilterByBrand />
        </div>

        <div className="col-span-9">
          <div className="flex items-center justify-between">
            <FilterBySearch />
            <SortProduct />
          </div>

          <div className="grid grid-cols-4 gap-5 mt-10 gap-y-10 min-h-96">
            {content}
          </div>

          <Pagination className="mt-10 bottom-0">
            <PaginationContent className="space-x-4">
              <PaginationItem>
                <Button variant="outline" className="border-none">
                  <PaginationPrevious size={24} href="#" />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="outline">
                  <PaginationLink size={24} href="#">
                    2
                  </PaginationLink>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="outline">
                  <PaginationLink size={24} href="#">
                    1
                  </PaginationLink>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="outline" className="border-none">
                  <PaginationNext size={24} href="#" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Products;
