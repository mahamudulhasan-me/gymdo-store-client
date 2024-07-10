import banner from "../assets/images/banner/breadcrumb.jpg";
import { ProductTable } from "../components/manageProduct/ProductTable";
import PageCover from "../components/pageCover/PageCover";
import SectionHead from "../utils/SectionHead";
const ManageProduct = () => {
  return (
    <div>
      <PageCover title="Manage Product" image={banner} />
      <div className="px-[8%] py-10 bg-gray-100">
        <SectionHead title="Manage Product" />
        <ProductTable />
      </div>
    </div>
  );
};

export default ManageProduct;
