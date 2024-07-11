import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import ProductCard from "../components/card/ProductCard";
import PageCover from "../components/pageCover/PageCover";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
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

const categories = [
  {
    id: 1,
    label: "Clothing Gym",
    value: "clothing",
  },
  {
    id: 2,
    label: "Fitness Equipment",
    value: "fitness",
  },
  {
    id: 3,
    label: "LifeStyle",
    value: "lifestyle",
  },
  {
    id: 4,
    label: "Accessories",
    value: "accessories",
  },
  {
    id: 5,
    label: "Gym Sport",
    value: "sport",
  },
];

const price = [
  {
    id: 1,
    value: "$0 - $100",
    label: "$0 - $100",
  },
  {
    id: 2,
    value: "$100 - $200",
    label: "$100 - $200",
  },
  {
    id: 3,
    value: "$200 - $300",
    label: "$200 - $300",
  },
  {
    id: 4,
    value: "$300 - $400",
    label: "$300 - $400",
  },
];
const brands = [
  {
    id: 1,
    label: "Adidas",
    value: "adidas",
  },
  {
    id: 2,
    label: "Puma",
    value: "puma",
  },
  {
    id: 3,
    label: "Reebok",
    value: "reebok",
  },
];
const Products = () => {
  return (
    <div>
      <PageCover title="Products" />
      <div className="px-[10%] py-16 grid grid-cols-12 gap-6">
        <div className="col-span-3 space-y-7">
          <>
            <div className="border-l-[3px] pl-2 border-black flex items-center gap-2">
              <h2 className="text-lg uppercase font-semibold  tracking-widest">
                Categories
              </h2>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-start space-y-2 mt-5">
              {categories.map((item) => (
                <span className="text-gray-800 hover:ml-3 transition-all hover:text-primary cursor-pointer text-sm hover:font-semibold">
                  {item.label}
                </span>
              ))}
            </div>
          </>
          <>
            <div className="border-l-[3px] pl-2 border-black flex items-center gap-2">
              <h2 className="text-lg uppercase font-semibold  tracking-widest">
                price
              </h2>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-start space-y-2 mt-5">
              {price.map((item) => (
                <div key={item.value} className="flex items-center space-x-2">
                  <Checkbox id={item.value} className="peer" />
                  <label
                    htmlFor={item.value}
                    className="text-gray-800 transition-all hover:text-primary cursor-pointer text-sm hover:font-semibold peer-checked:text-primary"
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
                brand
              </h2>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-start space-y-2 mt-5">
              {brands.map((item) => (
                <span className="text-gray-800 hover:ml-3 transition-all hover:text-primary cursor-pointer text-sm hover:font-semibold">
                  {item.label}
                </span>
              ))}
            </div>
          </>
        </div>
        <div className="col-span-9">
          <div className="flex items-center justify-between">
            {/* <form className="form relative">
              <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                <HiOutlineMagnifyingGlass />
              </button>
              <input
                className="input bg-gray-100 border-b rounded-md px-8 py-3 border-2 border-transparent focus:outline-none focus:border-primary placeholder-gray-400 transition-all duration-300 shadow-md"
                placeholder="Search..."
                required
                type="text"
              />
              <button
                type="reset"
                className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </form> */}
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

            <>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Default Sorting</SelectLabel>
                    <SelectItem value="hight to low">
                      Price, hight to low
                    </SelectItem>
                    <SelectItem value="low to hight">
                      Price, low to hight
                    </SelectItem>
                    <SelectItem value="newest"> Newest</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-10 gap-y-10">
            {Array.from({ length: 8 }).map(() => (
              <ProductCard />
            ))}
          </div>
          <Pagination className="mt-10 ">
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