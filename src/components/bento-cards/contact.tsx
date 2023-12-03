import CustomCard from "../shared/custom-card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactBentoCard = () => {
  return (
    <CustomCard>
      <h1 className=" moranga-bold text-xl mb-3">Contact Me</h1>
      <form>
        <div className=" space-y-2">
          <Label className=" font-semibold" htmlFor="email">
            Email
          </Label>
          <Input type="email" placeholder="your@email.com" />
        </div>
        <div className=" mt-5 space-y-2">
          <Label className=" font-semibold" htmlFor="name">
            Name
          </Label>
          <Input type="text" placeholder="Your Name" />
        </div>
        <div className=" mt-5 space-y-2">
          <Label className=" font-semibold" htmlFor="name">
            Message
          </Label>
          <Textarea className="  h-full " placeholder="Your Message" />
        </div>

        <Button className=" mt-5   ">Send</Button>
      </form>
    </CustomCard>
  );
};

export default ContactBentoCard;
