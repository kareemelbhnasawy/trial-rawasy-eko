import HeaderOne from "@/components/header/HeaderOne"
import BannerOne from "@/components/banner/BannerOne"
import CategoryOne from "@/components/category/CategoryOne"
import FeatureOne from "@/components/feature/FeatureOne"
import WeeklyBestSelling from "@/components/product/WeeklyBestSelling"
import BestDiscount from "@/components/product/BestDiscount"
import FeaturedSuppliers from "@/components/construction/FeaturedSuppliers"
import BulkOrderBanner from "@/components/construction/BulkOrderBanner"
import ProjectCalculator from "@/components/construction/ProjectCalculator"
import ConstructionTestimonials from "@/components/construction/ConstructionTestimonials"
import FooterOne from "@/components/footer/FooterOne"
import ServiceOne from "@/components/service/ServiceOne"

export default function HomePage() {
  return (
    <div className="main-wrapper">
      {/* Header */}
      <HeaderOne />

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <BannerOne />

        {/* Categories Section */}
        <CategoryOne />

        {/* Features Section */}
        <FeatureOne />

        {/* Best Selling Products */}
        <WeeklyBestSelling />

        {/* Discount Products */}
        <BestDiscount />

        {/* Featured Suppliers */}
        <FeaturedSuppliers />

        {/* Bulk Order Banner */}
        <BulkOrderBanner />

        {/* Project Calculator */}
        <ProjectCalculator />

        {/* Services */}
        <ServiceOne />

        {/* Testimonials */}
        <ConstructionTestimonials />
      </main>

      {/* Footer */}
      <FooterOne />
    </div>
  )
}
