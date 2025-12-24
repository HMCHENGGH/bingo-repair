import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Star, CheckCircle, Zap, Droplets, Wifi, Home, Wrench, ChevronRight, Menu, X, AlertCircle, Users, Calendar, FileText } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('emergency');

  const emergencyServices = [
    {
      id: 1,
      title: '24小時緊急水電維修',
      icon: <AlertCircle className="w-8 h-8" />,
      description: '水管爆裂、電路短路、跳閘、煤氣洩漏等緊急情況',
      price: '起價 MOP 540',
      response: '1-2小時內上門',
      features: ['24小時待命', '持證專業師傅', '緊急處理包']
    },
    {
      id: 2,
      title: '緊急漏水搶修',
      icon: <Droplets className="w-8 h-8" />,
      description: '水管爆裂、馬桶溢水、下水道堵塞等緊急漏水問題',
      price: '起價 MOP 480',
      response: '1-2小時內上門',
      features: ['專業檢測設備', '快速止漏技術', '防水處理']
    }
  ];

  const regularServices = [
    {
      id: 3,
      title: '水電維修',
      icon: <Zap className="w-8 h-8" />,
      description: '插座更換、開關維修、電路檢查、跳閘處理',
      price: '起價 MOP 360',
      features: ['澳門持證電工', '專業快速回應', '配件質保1年']
    },
    {
      id: 4,
      title: '弱電箱整理',
      icon: <Wifi className="w-8 h-8" />,
      description: '網線整理、光纖優化、安裝玻璃面板、標籤標識',
      price: '起價 MOP 360',
      features: ['專業網路佈線', '美觀玻璃面板', '提升家用網路穩定性']
    },
    {
      id: 5,
      title: '水管維修',
      icon: <Droplets className="w-8 h-8" />,
      description: '水龍頭更換、水管漏水、馬桶維修、下水道疏通',
      price: '起價 MOP 300',
      features: ['無損檢測技術', '環保密封材料', '24小時服務']
    },
    {
      id: 6,
      title: '家電維修',
      icon: <Home className="w-8 h-8" />,
      description: '空調、冰箱、洗衣機、熱水器等家電維修保養',
      price: '起價 MOP 450',
      features: ['原廠配件保證', '上門檢測免費', '維修後保修']
    },
    {
      id: 7,
      title: '家居裝修',
      icon: <Wrench className="w-8 h-8" />,
      description: '牆面修補、瓷磚更換、門窗維修、小型裝修工程',
      price: '起價 MOP 600',
      features: ['環保裝修材料', '專業施工團隊', '完工清潔服務']
    }
  ];

  const testimonials = [
    {
      name: '陳先生 - 新葡京附近',
      text: '半夜水管爆裂，師傅30分鐘就到了，收費合理，專業快速！',
      rating: 5,
      area: '澳門半島'
    },
    {
      name: '李太 - 氹仔',
      text: '弱電箱整理得非常專業，玻璃面板很漂亮，現在找網線再也不用翻箱倒櫃了！',
      rating: 5,
      area: '氹仔'
    },
    {
      name: '王先生 - 路環',
      text: '比裝修公司便宜很多，師傅很有耐心，小問題也認真處理，強烈推薦！',
      rating: 5,
      area: '路環'
    }
  ];

  const certifications = [
    { name: '澳門持證電工', number: 'EM-2023-0888' },
    { name: '澳門註冊水工', number: 'PM-2023-0666' },
    { name: '專業維修技師', number: 'HVAC-2023-0444' }
  ];

  const serviceGuarantees = [
    '90天維修質保',
    '無隱形消費',
    '明碼標價',
    '上門費已包含',
    '不滿意可退款'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              {/* Bingo Logo 图片 */}
              <img src="/bingo logo.png" alt="三元建築工程有限公司" className="h-10 w-auto mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">三元建築工程</h1>
                <p className="text-sm text-gray-600">持牌 · 專業 · 24小時服務</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+85366110985" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 font-medium flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                緊急維修
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">服務專案</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">聯繫我們</a>
                <a href="tel:+85366110985" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 font-medium">
                  緊急維修
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Emergency Focus */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <AlertCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              24小時緊急維修
            </h2>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              水管爆裂？電路短路？立即致電！1-2小時上門
            </p>
          </div>
          <div className="bg-white text-red-600 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold">回應時間</p>
                <p>1-2小時內上門</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold">服務範圍</p>
                <p>澳門全境 · 24小時</p>
              </div>
            </div>
          </div>
          <a href="tel:+85366110985" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 flex items-center mx-auto">
            <Phone className="w-5 h-5 mr-2" />
            立即致電 +853 6611 0985
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">我們的服務</h3>
            <p className="text-gray-600 text-lg">持牌師傅 · 明碼實價 · 90天保用</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.concat(regularServices).map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer border-l-4 border-blue-600 hover:border-red-600"
              >
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.response && (
                  <div className="text-sm text-gray-500 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.response}
                  </div>
                )}
                <div className="text-lg font-bold text-blue-600 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="tel:+85366110985" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium text-center block">
                  立即預約
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">澳門持牌工程公司</h3>
            <p className="text-gray-600 text-lg">英國 & 香港註冊結構工程師 · 澳門註冊土木工程師</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600">牌照號碼: {cert.number}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-6">服務保障</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {serviceGuarantees.map((guarantee, index) => (
                <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">{guarantee}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">澳門客戶真實評價</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {testimonial.area}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">立即預約維修</h3>
            <p className="text-gray-300 text-lg">24小時服務 · 澳門全境上門</p>
          </div>

          <div className="text-center mt-12">
            <a href="tel:+85366110985" className="bg-white text-gray-900 inline-block px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">
              <Phone className="w-5 h-5 inline mr-2" />
              致電 +853 6611 0985
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">電話預約</h4>
              <p className="text-gray-300">+853 6611 0985</p>
              <p className="text-gray-400 text-sm">24小時</p>
            </div>
            <div>
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">電郵</h4>
              <p className="text-gray-300">hmcheng.macau@gmail.com</p>
            </div>
            <div>
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">澳門地址</h4>
              <p className="text-gray-300">黑沙環馬路11-13號<br/>南方花園第六座地下A</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 三元建築工程有限公司</p>
            <p className="text-gray-400 mt-2">英國及香港註冊結構工程師 · 澳門註冊土木工程師</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;