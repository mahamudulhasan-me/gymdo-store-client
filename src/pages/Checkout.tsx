import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { useAppSelector } from "../redux/hooks";

import { useState } from "react";
import {
  HiMiniArrowPath,
  HiMiniCreditCard,
  HiOutlineShieldCheck,
  HiOutlineShoppingCart,
  HiOutlineSparkles,
  HiOutlineTruck,
} from "react-icons/hi2";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Textarea } from "../components/ui/textarea";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const { cartItems, total, totalItems } = useAppSelector(
    (state) => state.cart
  );

  const TAX_RATE = 0.01; // 10% tax rate
  const SHIPPING = 7;
  const COD_CHARGE = 0.1;
  const subtotal = total; // assuming `total` is the sum of all item prices
  const tax = subtotal * TAX_RATE;
  const totalWithTax = subtotal + tax;
  let totalAmount;
  if (paymentMethod === "COD") {
    totalAmount = (totalWithTax + SHIPPING + COD_CHARGE).toFixed(2);
  } else {
    totalAmount = (totalWithTax + SHIPPING).toFixed(2);
  }

  const handlePlaceOrder = () => {
    if (!fullName.firstName || !fullName.lastName) {
      setError("Please enter your full name");
      return;
    } else if (!contact) {
      setError("Please enter your contact number");
      return;
    } else if (!address) {
      setError("Please enter your address");
      return;
    } else if (!postalCode) {
      setError("Please enter your postal code");
      return;
    } else if (!city) {
      setError("Please enter your city");
      return;
    }
    const orderInfo = {
      product: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
      fullName: `${fullName.firstName} ${fullName.lastName}`,
      contact,
      address,
      postalCode,
      city,
      paymentMethod,
      totalAmount,
    };
    console.log(orderInfo);
  };

  return (
    <section>
      <Breadcrumb className="my-5 py-6 bg-gray-100">
        <BreadcrumbList className="container mx-auto">
          <BreadcrumbItem className="text-xl text-black">
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-black text-2xl" />
          <BreadcrumbItem className="text-xl text-black">
            <BreadcrumbLink asChild>
              <Link to="/cart">Cart</Link>
            </BreadcrumbLink>
            <BreadcrumbSeparator className="text-black text-2xl" />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary text-xl">
              Checkout
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative container mx-auto grid grid-cols-12 mt-4 mb-20 gap-10">
        <aside className="col-span-7">
          <form>
            <div>
              <Label className="text-xl">Contact</Label>
              <Input
                type="text"
                placeholder="Email or mobile phone number"
                className="mb-5"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <Label className="text-xl ">Delivery</Label>
            <div className="space-y-3 mb-5">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="text"
                  placeholder="First name"
                  required
                  value={fullName.firstName}
                  onChange={(e) =>
                    setFullName({ ...fullName, firstName: e.target.value })
                  }
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  required
                  value={fullName.lastName}
                  onChange={(e) =>
                    setFullName({ ...fullName, lastName: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <Input
                  className="col-span-2"
                  type="text"
                  placeholder="City"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <Textarea
                placeholder="Address- House No, Building, Street, Area"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <Label className="text-xl">Payment Method</Label>
              <RadioGroup
                defaultValue={paymentMethod}
                onValueChange={(value) => setPaymentMethod(value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="COD" id="COD" />
                  <Label htmlFor="COD">Cash on delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online">Online</Label>
                </div>
              </RadioGroup>
            </div>
          </form>
          <Link
            to="/cart"
            className="bg-gray-950 w-fit  mt-6 text-white py-4 rounded-sm px-5 flex items-center justify-center gap-2 uppercase  hover:bg-primary transition-all ease-in-out duration-300 "
          >
            Update Cart <HiOutlineShoppingCart size={20} />
          </Link>
        </aside>
        <aside className="col-span-5">
          <div className="my-5 border-b pb-5">
            <p className="text-lg mb-3">Shipping Info:</p>
            {contact && (
              <p className="flex items-center justify-between">
                <span>Contact</span> <span>{contact}</span>
              </p>
            )}
            {(fullName.firstName || fullName.lastName) && (
              <p className=" flex items-center justify-between">
                <span>Full Name</span>{" "}
                <span>
                  {fullName.firstName} {fullName?.lastName}
                </span>
              </p>
            )}
            {city && (
              <p className="flex items-center justify-between">
                <span>City</span>{" "}
                <span>
                  {city} {postalCode && ` - ${postalCode}`}
                </span>
              </p>
            )}
            {address && (
              <p className="flex items-center justify-between">
                <span>Address</span> <span>{address}</span>
              </p>
            )}
            {paymentMethod && (
              <p className="flex items-center justify-between">
                <span>Payment Method</span> <span>{paymentMethod}</span>
              </p>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-lg flex items-center justify-between">
              <span>{totalItems} Items</span>{" "}
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="text-lg flex items-center justify-between">
              <span>Shippings</span> <span>$7.00</span>
            </p>
          </div>
          <div className="my-8">
            {paymentMethod === "COD" && (
              <p className="text-lg flex items-center justify-between">
                <span>COD Charge</span> <span>10%</span>
              </p>
            )}
            <p className="text-lg flex items-center justify-between">
              <span>Total (tax incl.)</span> <span>${totalAmount}</span>
            </p>
          </div>

          <button
            disabled={totalItems <= 0}
            onClick={handlePlaceOrder}
            className="rounded-sm mt-5 text-white p-4 w-full flex items-center justify-center gap-2 text-xl uppercase bg-primary transition-all ease-in-out duration-300 group"
          >
            {paymentMethod === "COD" ? (
              <>
                Place Order <HiOutlineSparkles size={22} />
              </>
            ) : (
              <>
                Make Payment and place Order <HiMiniCreditCard size={22} />
              </>
            )}
          </button>
          <div className="mt-6 space-y-2 text-lg">
            <p className="flex items-center gap-2">
              <HiOutlineShieldCheck size={22} /> Secure Checkout
            </p>
            <p className="flex items-center gap-2">
              <HiOutlineTruck size={22} /> Fast Delivery
            </p>
            <p className="flex items-center gap-2">
              <HiMiniArrowPath size={22} /> Easy Returns
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Checkout;
