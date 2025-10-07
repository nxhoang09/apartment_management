import { PageTransition } from "@/components/page-transition"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Shield, Award, Target, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageTransition>
        <div className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Về Chúng Tôi</h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  ApartmentHub là hệ thống quản lý chung cư hiện đại, mang đến giải pháp toàn diện cho việc quản lý và
                  kết nối cộng đồng cư dân.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Sứ Mệnh</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cung cấp giải pháp quản lý chung cư thông minh, hiện đại, giúp tối ưu hóa quy trình vận hành và nâng
                    cao chất lượng cuộc sống của cư dân.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
                  <Heart className="h-12 w-12 text-secondary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Tầm Nhìn</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Trở thành nền tảng quản lý chung cư hàng đầu Việt Nam, kết nối và phục vụ hàng triệu cư dân với công
                    nghệ tiên tiến nhất.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Giá Trị Cốt Lõi</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Những giá trị định hướng mọi hoạt động của chúng tôi
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Tin Cậy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Bảo mật thông tin tuyệt đối và minh bạch trong mọi giao dịch
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Kết Nối</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Xây dựng cộng đồng cư dân gắn kết và hỗ trợ lẫn nhau
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Chất Lượng</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cam kết mang đến dịch vụ và trải nghiệm tốt nhất
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About Building */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Về Sunrise Tower</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Sunrise Tower là dự án chung cư cao cấp tọa lạc tại vị trí đắc địa 123 Đường ABC, Quận 1,
                        TP.HCM. Với 30 tầng và 240 căn hộ hiện đại, chúng tôi mang đến không gian sống lý tưởng cho mọi
                        gia đình.
                      </p>
                      <p>
                        Được thiết kế bởi các kiến trúc sư hàng đầu, Sunrise Tower kết hợp hoàn hảo giữa phong cách hiện
                        đại và tiện nghi cao cấp, tạo nên một cộng đồng sống đẳng cấp và văn minh.
                      </p>
                      <p>
                        Hệ thống tiện ích đa dạng bao gồm hồ bơi, phòng gym, khu vui chơi trẻ em, và nhiều dịch vụ khác
                        đáp ứng mọi nhu cầu của cư dân.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image src="/images/property-1.png" alt="Sunrise Tower" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">240</div>
                  <div className="text-sm text-muted-foreground">Căn hộ</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30</div>
                  <div className="text-sm text-muted-foreground">Tầng</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Tiện ích</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Hỗ trợ</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
      <Footer />
    </div>
  )
}
