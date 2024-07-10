import banner from "../assets/images/banner/breadcrumb.jpg";
import { ProductTable } from "../components/manageProduct/ProductTable";
import PageCover from "../components/pageCover/PageCover";
const ManageProduct = () => {
  return (
    <div>
      <PageCover title="Manage Product" image={banner} />
      <ProductTable />
    </div>
  );
};

export default ManageProduct;
