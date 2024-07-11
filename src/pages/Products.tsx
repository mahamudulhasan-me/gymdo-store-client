import { useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import ProductCard from "../components/card/ProductCard";
import PageCover from "../components/pageCover/PageCover";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { ProductCardLoader } from "../components/ui/loader/ProductCardLoader";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useGetProductsQuery } from "../redux/features/product/productApiSlice";
import { IProduct } from "../types/product.type";
import { brands, categories } from "../utils/categories";

const priceRanges = [
  {
    id: 1,
    value: 100,
    label: "$0 - $100",
  },
  {
    id: 2,
    value: 200,
    label: "$100 - $200",
  },
  {
    id: 3,
    value: 300,
    label: "$200 - $300",
  },
  {
    id: 4,
    value: 400,
    label: "$300 - $400",
  },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({
    category: "",
    price: null,
    brand: "",
  });

  const { data, isLoading, isSuccess, isError, error } =
    useGetProductsQuery(query);

  useEffect(() => {
    if (isSuccess) {
      setProducts(data?.data);
    } else if (isError) {
      setProducts([]);
    }
  }, [data, isError, isSuccess, products]);

  let content = null;
  if (isLoading) {
    content = Array.from({ length: 8 }).map((_, index) => (
      <ProductCardLoader key={index} />
    ));
  } else if (!isLoading && isError) {
    content = (
      <h1 className="col-span-4 text-3xl font-bold text-gray-900">
        {error.data.message}
      </h1>
    );
  } else if (!isLoading && !error && products?.length === 0) {
    content = (
      <h1 className="col-span-4 text-3xl font-bold text-gray-900">
        No Products Found
      </h1>
    );
  } else {
    content = products?.map((product: IProduct) => (
      <ProductCard key={product._id} productDetails={product} />
    ));
  }

  return (
    <div>
      <PageCover title="Products" />
      <div className="px-[10%] py-16 grid grid-cols-12 gap-6">
        <div className="col-span-3 space-y-7">
          {(query.category || query.brand || query.price) && (
            <Button
              className="-mb-10"
              size="sm"
              variant="outline"
              onClick={() => setQuery({})}
            >
              <GrPowerReset className="mr-1" /> Reset Filter
            </Button>
          )}
          <>
            <div className="border-l-[3px] pl-2 border-black flex items-center gap-2">
              <h2 className="text-lg uppercase font-semibold  tracking-widest">
                Categories
              </h2>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-start space-y-2 mt-5">
              {categories.map((item) => (
                <span
                  key={item}
                  onClick={() => setQuery({ ...query, category: item })}
                  className={`text-gray-800 hover:ml-3 transition-all hover:text-primary cursor-pointer text-sm hover:font-semibold ${
                    query.category === item ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </>

          <>
            <div className="border-l-[3px] pl-2 border-black flex items-center gap-2">
              <h2 className="text-lg uppercase font-semibold  tracking-widest">
                Price
              </h2>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-start space-y-2 mt-5">
              {priceRanges.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setQuery({ ...query, price: item.value })}
                  className={`flex items-center space-x-2 cursor-pointer`}
                >
                  <Checkbox id={item.value} className="peer" />
                  <label
                    htmlFor={item.value}
                    className={`text-gray-800 transition-all hover:text-primary cursor-pointer text-sm hover:font-semibold peer-checked:text-primary ${
                      query.price === item.value
                        ? "text-primary font-semibold"
                        : ""
                    }`}
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </>

          <>
            <div className="border-l-[3px] pl-2 border-black flex items-center gap-2">
              <h2 className="text-lg uppercase font-semibold tracking-widest">
                Brand
              </h2>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-start space-y-2 mt-5">
              {brands.map((item) => (
                <span
                  key={item}
                  onClick={() => setQuery({ ...query, brand: item })}
                  className={`text-gray-800 hover:ml-3 transition-all hover:text-primary cursor-pointer text-sm hover:font-semibold ${
                    query.brand === item ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </>
        </div>

        <div className="col-span-9">
          <div className="flex items-center justify-between">
            <div className="ui-input-container">
              <input
                required
                placeholder="Search Product..."
                className="ui-input"
                type="text"
              />
              <div className="ui-input-underline"></div>
              <div className="ui-input-highlight"></div>
              <div className="ui-input-icon">
                <HiOutlineMagnifyingGlass />
              </div>
            </div>

            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Default Sorting</SelectLabel>
                  <SelectItem value="high-to-low">
                    Price, high to low
                  </SelectItem>
                  <SelectItem value="low-to-high">
                    Price, low to high
                  </SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 gap-5 mt-10 gap-y-10">{content}</div>

          <Pagination className="mt-10">
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
