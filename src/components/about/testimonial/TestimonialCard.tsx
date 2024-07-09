import { HiStar } from "react-icons/hi2";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const TestimonialCard = () => {
  return (
    <div className="border p-5 space-y-4">
      <span className="flex gap-2 text-primary">
        {Array.from({ length: 5 }).map(() => (
          <HiStar />
        ))}
      </span>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Aliquid, repellat.
      </p>
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p>Mahamudul Hasan</p>
          <p className="text-sm text-gray-500">CEO, Shadcn</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
