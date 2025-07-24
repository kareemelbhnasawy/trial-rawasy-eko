import HeaderOne from "@/components/header/HeaderOne"
import BannerOne from "@/components/banner/BannerOne"
import CategoryOne from "@/components/category/CategoryOne"
import FeatureProduct from "@/components/product/FeatureProduct"
import BulkOrderBanner from "@/components/construction/BulkOrderBanner"
import ProjectCalculator from "@/components/construction/ProjectCalculator"
import FeaturedSuppliers from "@/components/construction/FeaturedSuppliers"
import ConstructionTestimonials from "@/components/construction/ConstructionTestimonials"
import ServiceOne from "@/components/service/ServiceOne"
import FooterOne from "@/components/footer/FooterOne"

export default function Home() {
  return (
    <div className="construction-marketplace">
      <HeaderOne />
      <BannerOne />
      <CategoryOne />
      <FeatureProduct />
      <BulkOrderBanner />
      <ProjectCalculator />
      <FeaturedSuppliers />
      <ConstructionTestimonials />
      <ServiceOne />
      <FooterOne />
    </div>
  )
}
