import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ title, price, image, category }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group animate-fadeIn">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-secondary font-bold">${price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};