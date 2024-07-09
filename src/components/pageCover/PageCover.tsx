import { Link } from "react-router-dom";
import bgBanner from "../../assets/images//banner/bg_page.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
const PageCover = () => {
  return (
    <div className="w-screen relative">
      <img src={bgBanner} alt="" className="w-full h-80" />
      <div className="absolute inset-0 flex flex-col justify-center items-center ">
        <div className="relative flex flex-col justify-center items-center mb-10">
          <h1
            className={`text-center text-white font-semibold text-4xl capitalize tracking-wide`}
          >
            About Us
          </h1>
          <div className="w-24 h-0.5 bg-primary"></div>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default PageCover;
