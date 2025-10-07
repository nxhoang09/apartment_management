import { PageTransition } from "@/components/page-transition"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageTransition>
        <div className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Liên Hệ Với Chúng Tôi</h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi qua các kênh dưới đây.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Info & Form */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn. Đừng ngần ngại liên hệ với chúng tôi qua bất kỳ
                      kênh nào dưới đây.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Địa chỉ</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Đường ABC, Quận 1<br />
                          Thành phố Hồ Chí Minh, Việt Nam
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Điện thoại</h3>
                        <p className="text-sm text-muted-foreground">
                          Hotline: +84 123 456 789
                          <br />
                          Văn phòng: +84 987 654 321
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-sm text-muted-foreground">
                          Tổng đài: info@apartmenthub.vn
                          <br />
                          Hỗ trợ: support@apartmenthub.vn
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Giờ làm việc</h3>
                        <p className="text-sm text-muted-foreground">
                          Thứ 2 - Thứ 6: 8:00 - 18:00
                          <br />
                          Thứ 7: 8:00 - 12:00
                          <br />
                          Chủ nhật: Nghỉ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
                  <h2 className="text-2xl font-bold mb-6">Gửi Tin Nhắn</h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input id="name" placeholder="Nguyễn Văn A" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input id="phone" type="tel" placeholder="+84 123 456 789" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Tiêu đề *</Label>
                      <Input id="subject" placeholder="Vấn đề cần hỗ trợ" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Nội dung *</Label>
                      <Textarea id="message" placeholder="Mô tả chi tiết vấn đề của bạn..." rows={6} required />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Gửi tin nhắn
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Vị Trí</h2>
                <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4967814570207!2d106.69522831533417!3d10.776889992320595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0xb3ff69197b10ec4f!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ vị trí Sunrise Tower"
                  />
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
