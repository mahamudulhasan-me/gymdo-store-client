import { useGetProductsQuery } from "../../../redux/features/product/productApiSlice";
import { IProduct } from "../../../types/product.type";
import SectionHead from "../../../utils/SectionHead";
import ProductCard from "../../card/ProductCard";
import { BtnSecondary } from "../../ui/BtnSecondary";
import { ProductCardLoader } from "../../ui/loader/ProductCardLoader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

const ClothesAndEquipment = () => {
  const { data: products, isLoading } = useGetProductsQuery({});

  return (
    <div className="md:px-[10%] px-5 my-20">
      <SectionHead title="clothes & equipment" />
      <Tabs defaultValue="EQUIPMENT">
        <TabsList className="grid md:w-1/2 w-full grid-cols-3 mx-auto mt-5 mb-10">
          <TabsTrigger value="EQUIPMENT">EQUIPMENT</TabsTrigger>
          <TabsTrigger value="MENS_CLOTHES">MEN'S CLOTHES</TabsTrigger>
          <TabsTrigger value="WOMANS_CLOTHES">WOMAN'S CLOTHES</TabsTrigger>
        </TabsList>
        <TabsContent value="EQUIPMENT">
          <div className="grid md:grid-cols-4 gap-8">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <ProductCardLoader key={index} />
                ))
              : products?.data?.map((product: IProduct) => (
                  <ProductCard key={product._id} productDetails={product} />
                ))}
          </div>
        </TabsContent>
        <TabsContent value="MENS_CLOTHES">MEN</TabsContent>
        <TabsContent value="WOMANS_CLOTHES">WOMEN</TabsContent>
      </Tabs>
      <div className="flex justify-center items-center mt-5">
        <BtnSecondary />
      </div>
    </div>
  );
};

export default ClothesAndEquipment;
