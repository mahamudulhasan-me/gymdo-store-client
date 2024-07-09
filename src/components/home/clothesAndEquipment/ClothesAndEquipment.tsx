import ProductCard from "../../card/ProductCard";
import { BtnSecondary } from "../../ui/BtnSecondary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

const ClothesAndEquipment = () => {
  return (
    <div className="px-[10%] my-20">
      <h1 className="text-center text-primary font-semibold text-3xl capitalize tracking-wide">
        clothes & equipment
      </h1>
      <Tabs defaultValue="EQUIPMENT">
        <TabsList className="grid w-1/2 grid-cols-3 mx-auto mt-5 mb-10">
          <TabsTrigger value="EQUIPMENT">EQUIPMENT</TabsTrigger>
          <TabsTrigger value="MENS_CLOTHES">MEN'S CLOTHES</TabsTrigger>
          <TabsTrigger value="WOMANS_CLOTHES">WOMAN'S CLOTHES</TabsTrigger>
        </TabsList>
        <TabsContent value="EQUIPMENT">
          <div className="grid grid-cols-4 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
