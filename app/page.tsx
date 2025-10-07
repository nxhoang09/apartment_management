import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ImageGallery } from "@/components/ui/image-gallery"
import {
  Building2,
  Users,
  FileText,
  Shield,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Wifi,
  Car,
  Dumbbell,
  ShoppingBag,
  Trees,
  Waves,
} from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  const galleryImages = [
    {
      src: "/slider1.jpg",
      alt: "",
    },
    {
      src: "/slider2.jpg",
      alt: "",
    },
    {
      src: "/slider3.jpg",
      alt: "",
    },
    {
      src: "/slider4.jpg",
      alt: "Fitness Center",
    },
  ]
  return (
    <div className="">
      <Navigation />

      <PageTransition>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4 py-20 md:py-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
                  <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Chung cư cao cấp tại trung tâm thành phố
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                    Chung cư
                    <span className="text-primary"> Sunrise Tower</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                    Tòa nhà hiện đại 25 tầng với 500 căn hộ cao cấp, đầy đủ tiện ích và dịch vụ quản lý chuyên nghiệp.
                    Vị trí đắc địa, giao thông thuận lợi, môi trường sống lý tưởng cho gia đình.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(028) 1234 5678</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" asChild className="group">
                      <Link href="#contact">
                        Liên hệ ngay
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/apartments">Xem căn hộ</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <ImageGallery images={galleryImages} />
                  </div>
                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">500</div>
                        <div className="text-sm text-muted-foreground">Căn hộ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Về Sunrise Tower</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Không gian sống hiện đại, tiện nghi đầy đủ và dịch vụ quản lý chuyên nghiệp
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src="/images/apartment-1.jpg"
                    alt="Lobby chung cư"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white font-semibold text-lg">Sảnh chính sang trọng</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src="/images/apartment-2.jpg"
                    alt="Phòng khách căn hộ"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white font-semibold text-lg">Căn hộ hiện đại</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src="/images/apartment-3.jpg"
                    alt="Hồ bơi"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white font-semibold text-lg">Hồ bơi ngoài trời</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src="/images/apartment-4.jpg"
                    alt="Phòng gym"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white font-semibold text-lg">Phòng gym đầy đủ</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src="/images/apartment-5.jpg"
                    alt="Khu vui chơi trẻ em"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white font-semibold text-lg">Khu vui chơi trẻ em</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src="/images/apartment-6.jpg"
                    alt="Khu vườn xanh"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white font-semibold text-lg">Vườn cây xanh mát</p>
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sunrise Tower là tòa nhà chung cư cao cấp được xây dựng theo tiêu chuẩn quốc tế, nằm tại vị trí đắc
                  địa trung tâm thành phố. Với 25 tầng và 500 căn hộ, chúng tôi mang đến không gian sống hiện đại, tiện
                  nghi và an toàn cho mọi gia đình.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hệ thống quản lý chuyên nghiệp, bảo vệ 24/7, camera an ninh toàn bộ khu vực, cùng đội ngũ nhân viên
                  tận tâm luôn sẵn sàng phục vụ cư dân.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Tiện ích nổi bật</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Đầy đủ tiện nghi phục vụ nhu cầu sinh hoạt và giải trí của cư dân
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Waves className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Hồ bơi</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hồ bơi ngoài trời rộng 500m² với khu vực dành riêng cho trẻ em
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Dumbbell className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">Phòng gym</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Phòng tập gym hiện đại với đầy đủ thiết bị và huấn luyện viên chuyên nghiệp
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Car className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Bãi đỗ xe</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hầm đỗ xe rộng rãi, an toàn với hệ thống quản lý thông minh
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-chart-4/10 flex items-center justify-center">
                      <ShoppingBag className="h-6 w-6 text-chart-4" />
                    </div>
                    <h3 className="text-xl font-semibold">Trung tâm thương mại</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Khu mua sắm, ăn uống và giải trí ngay tại tầng trệt
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-chart-5/10 flex items-center justify-center">
                      <Trees className="h-6 w-6 text-chart-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Vườn cây xanh</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Khu vườn xanh mát, không gian thư giãn và vui chơi cho gia đình
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Wifi className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">WiFi miễn phí</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Internet tốc độ cao miễn phí tại khu vực công cộng
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Hệ thống quản lý</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Nền tảng quản lý hiện đại giúp kết nối ban quản lý và cư dân
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Quản lý căn hộ</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Theo dõi thông tin căn hộ, diện tích, tầng, trạng thái và chủ hộ một cách chi tiết và chính xác.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 2 */}
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">Quản lý cư dân</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lưu trữ thông tin cá nhân, quan hệ hộ gia đình và theo dõi người tạm trú/tạm vắng hiệu quả.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 3 */}
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Khai báo trực tuyến</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cư dân dễ dàng gửi phiếu đăng ký tạm trú/tạm vắng, admin phê duyệt nhanh chóng.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 4 */}
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-chart-4/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-chart-4" />
                    </div>
                    <h3 className="text-xl font-semibold">Bảo mật cao</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hệ thống xác thực vai trò, bảo vệ thông tin cá nhân và dữ liệu nhạy cảm của cư dân.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 5 */}
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-chart-5/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-chart-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Thống kê báo cáo</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Xem báo cáo chi tiết về số lượng cư dân, tình trạng căn hộ và các hoạt động khác.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 6 */}
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Dễ dàng mở rộng</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kiến trúc linh hoạt, dễ dàng thêm tính năng mới và tích hợp với các hệ thống khác.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Liên hệ với chúng tôi</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Để được tư vấn chi tiết về căn hộ và dịch vụ, vui lòng liên hệ với chúng tôi
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Địa chỉ</p>
                          <p className="text-muted-foreground">123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Điện thoại</p>
                          <p className="text-muted-foreground">(028) 1234 5678</p>
                          <p className="text-muted-foreground">Hotline: 0901 234 567</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Email</p>
                          <p className="text-muted-foreground">info@sunrisetower.vn</p>
                          <p className="text-muted-foreground">support@sunrisetower.vn</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-xl border border-border/50">
                    <h4 className="font-semibold mb-4">Giờ làm việc</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Thứ 2 - Thứ 6:</span>
                        <span className="font-medium">8:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Thứ 7:</span>
                        <span className="font-medium">8:00 - 12:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chủ nhật:</span>
                        <span className="font-medium">Nghỉ</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Họ và tên <span className="text-destructive">*</span>
                        </label>
                        <Input id="name" placeholder="Nhập họ và tên của bạn" required />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email <span className="text-destructive">*</span>
                          </label>
                          <Input id="email" type="email" placeholder="email@example.com" required />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Số điện thoại <span className="text-destructive">*</span>
                          </label>
                          <Input id="phone" type="tel" placeholder="0901 234 567" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Tiêu đề
                        </label>
                        <Input id="subject" placeholder="Tư vấn về căn hộ" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Nội dung <span className="text-destructive">*</span>
                        </label>
                        <Textarea id="message" placeholder="Nhập nội dung cần tư vấn..." rows={5} required />
                      </div>

                      <Button type="submit" size="lg" className="w-full group">
                        Gửi tin nhắn
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-12 md:p-16 text-center">
                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                    Trở thành cư dân của chúng tôi
                  </h2>
                  <p className="text-lg text-primary-foreground/90 text-pretty">
                    Đăng ký tài khoản để truy cập hệ thống quản lý và tận hưởng các dịch vụ tiện ích
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" variant="secondary" asChild className="group">
                      <Link href="/register">
                        Đăng ký ngay
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Link href="/apartments">Xem căn hộ</Link>
                    </Button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
              </div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </div>
  )
}
