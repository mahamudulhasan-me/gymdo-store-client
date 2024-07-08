import ActiveLink from "../../../utils/ActiveLink";

const naveItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Manage Product", path: "/manage-product" },
  { name: "About Us", path: "/about" },
];

const NavItems = () => {
  return (
    <nav>
      <ul className="flex gap-8 font-semibold text-lg uppercase">
        {naveItems.map((item) => (
          <ActiveLink key={item.path} to={item.path}>
            {item.name}
          </ActiveLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
