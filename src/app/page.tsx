import HeaderOne from "@/components/header/HeaderOne"
import BannerOne from "@/components/banner/BannerOne"
import CategoryOne from "@/components/category/CategoryOne"
import BulkOrderBanner from "@/components/construction/BulkOrderBanner"
import ProjectCalculator from "@/components/construction/ProjectCalculator"
import FeaturedSuppliers from "@/components/construction/FeaturedSuppliers"
import ConstructionTestimonials from "@/components/construction/ConstructionTestimonials"
import FooterOne from "@/components/footer/FooterOne"
import FeatureProduct from "@/components/product/FeatureProduct"
import ShortService from "@/components/service/ShortService"

export default function Home() {
  return (
    <div className="rawasy-construction-marketplace">
      <HeaderOne />
      <BannerOne />
      <CategoryOne />
      <FeatureProduct />
      <BulkOrderBanner />
      <ProjectCalculator />
      <FeaturedSuppliers />
      <ConstructionTestimonials />
      <ShortService />
      <FooterOne />
    </div>
  )
}
