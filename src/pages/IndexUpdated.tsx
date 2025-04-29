import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import GetQuoteButton from '../components/GetQuoteButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Rocket } from 'lucide-react';

const IndexUpdated = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-700 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Manufacturer of Exclusively Virgin Quality HM-HDPE Jerry Cans & Open Top Drums
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              High quality packaging solutions for your business needs
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/products">Our Products</Link>
              </Button>
              <GetQuoteButton size="lg" variant="outline" className="bg-white hover:bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <Card>
              <CardHeader>
                <CardTitle>HM-HDPE Jerry Cans</CardTitle>
                <CardDescription>Durable and reliable jerry cans for various applications.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Available in various sizes and specifications to meet your needs.</p>
              </CardContent>
              <CardFooter>
                <Button asChild><Link to="/products">Learn More</Link></Button>
              </CardFooter>
            </Card>

            {/* Product Card 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Open Top Drums</CardTitle>
                <CardDescription>High-quality open top drums for industrial use.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Designed for easy filling and dispensing of liquids and solids.</p>
              </CardContent>
              <CardFooter>
                <Button asChild><Link to="/products">Learn More</Link></Button>
              </CardFooter>
            </Card>

            {/* Product Card 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Custom Packaging Solutions</CardTitle>
                <CardDescription>Tailored packaging solutions to fit your specific requirements.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We work with you to create the perfect packaging for your products.</p>
              </CardContent>
              <CardFooter>
                <Button asChild><Link to="/contact">Contact Us</Link></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Virgin Quality Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We use only virgin quality HM-HDPE to ensure the highest standards of safety and durability.</p>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Durable and Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our products are designed to withstand the rigors of industrial use and transportation.</p>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Customizable Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We offer a range of customizable options to meet your specific packaging needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certification Card 1 */}
            <Card>
              <CardHeader>
                <CardTitle>ISO 9001:2015</CardTitle>
                <CardDescription>Quality Management System</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Certified for maintaining a high-quality management system.</p>
              </CardContent>
            </Card>

            {/* Certification Card 2 */}
            <Card>
              <CardHeader>
                <CardTitle>UN Certified</CardTitle>
                <CardDescription>For Hazardous Goods Packaging</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our packaging solutions are UN certified for safe transport of hazardous goods.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-900 py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Rocket size={48} className="mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your packaging needs and find the perfect solution.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <GetQuoteButton size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-blue-900" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexUpdated;
