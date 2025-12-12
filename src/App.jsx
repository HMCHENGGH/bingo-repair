import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Star, CheckCircle, Zap, Droplets, Wifi, Home, Wrench, ChevronRight, Menu, X, AlertCircle, Users, Calendar, FileText } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('emergency');

  const emergencyServices = [
    {
      id: 1,
      title: '24小时紧急水电维修',
      icon: <AlertCircle className="w-8 h-8" />,
      description: '水管爆裂、电路短路、跳闸、煤气泄漏等紧急情况',
      price: '起价 MOP 540',
      response: '1-2小时内上门',
      features: ['24小时待命', '持证专业师傅', '紧急处理包']
    },
    {
      id: 2,
      title: '紧急漏水抢修',
      icon: <Droplets className="w-8 h-8" />,
      description: '水管爆裂、马桶溢水、下水道堵塞等紧急漏水问题',
      price: '起价 MOP 480',
      response: '1-2小时内上门',
      features: ['专业检测设备', '快速止漏技术', '防水处理']
    }
  ];

  const regularServices = [
    {
      id: 3,
      title: '水电维修',
      icon: <Zap className="w-8 h-8" />,
      description: '插座更换、开关维修、电路检查、跳闸处理',
      price: '起价 MOP 360',
      features: ['澳门持证电工', '专业快速响应', '配件质保1年']
    },
    {
      id: 4,
      title: '弱电箱整理',
      icon: <Wifi className="w-8 h-8" />,
      description: '网线整理、光纤优化、安装玻璃面板、标签标识',
      price: '起价 MOP 360',
      features: ['专业网络布线', '美观玻璃面板', '提升家庭网络稳定性']
    },
    {
      id: 5,
      title: '水管维修',
      icon: <Droplets className="w-8 h-8" />,
      description: '水龙头更换、水管漏水、马桶维修、下水道疏通',
      price: '起价 MOP 300',
      features: ['无损检测技术', '环保密封材料', '24小时服务']
    },
    {
      id: 6,
      title: '家电维修',
      icon: <Home className="w-8 h-8" />,
      description: '空调、冰箱、洗衣机、热水器等家电维修保养',
      price: '起价 MOP 450',
      features: ['原厂配件保证', '上门检测免费', '维修后保修']
    },
    {
      id: 7,
      title: '家居装修',
      icon: <Wrench className="w-8 h-8" />,
      description: '墙面修补、瓷砖更换、门窗维修、小型装修工程',
      price: '起价 MOP 600',
      features: ['环保装修材料', '专业施工团队', '完工清洁服务']
    }
  ];

  const testimonials = [
    {
      name: '陈先生 - 新葡京附近',
      text: '半夜水管爆裂，师傅30分钟就到了，收费合理，专业快速！',
      rating: 5,
      area: '澳门半岛'
    },
    {
      name: '李太 - 氹仔',
      text: '弱电箱整理得非常专业，玻璃面板很漂亮，现在找网线再也不用翻箱倒柜了！',
      rating: 5,
      area: '氹仔'
    },
    {
      name: '王先生 - 路环',
      text: '比装修公司便宜很多，师傅很有耐心，小问题也认真处理，强烈推荐！',
      rating: 5,
      area: '路环'
    }
  ];

  const certifications = [
    { name: '澳门持证电工', number: 'EM-2023-0888' },
    { name: '澳门注册水工', number: 'PM-2023-0666' },
    { name: '专业维修技师', number: 'HVAC-2023-0444' }
  ];

  const serviceGuarantees = [
    '90天维修质保',
    '无隐形消费',
    '明码标价',
    '上门费已包含',
    '不满意可退款'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">三元维修</h1>
                <p className="text-sm text-gray-600">澳门专业持证师傅 · 便靓正服务</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-2">
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">粤</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">简</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">EN</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">PT</button>
              </div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 font-medium flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                紧急维修
              </button>
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
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">粤</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">简</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">EN</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">PT</button>
              </div>
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">服务项目</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">关于我们</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">联系我们</a>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 font-medium">
                  紧急维修
                </button>
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
              24小时紧急维修
            </h2>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              水管爆裂？电路短路？煤气泄漏？立即联系我们！
            </p>
          </div>
          <div className="bg-white text-red-600 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold">响应时间</p>
                <p>1-2小时内上门</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold">服务范围</p>
                <p>澳门全境 · 24小时待命</p>
              </div>
            </div>
          </div>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 flex items-center mx-auto">
            <Phone className="w-5 h-5 mr-2" />
            立即紧急呼叫 +853 6611 0985
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">我们的服务</h3>
            <p className="text-gray-600 text-lg">澳门专业持证师傅，专业解决各种家居维修需求</p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('emergency')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'emergency'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                紧急维修
              </button>
              <button
                onClick={() => setActiveTab('regular')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'regular'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                常规服务
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'emergency' ? emergencyServices : regularServices).map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer border-l-4 border-blue-600 hover:border-red-600"
                onClick={() => setSelectedService(service)}
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
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium">
                  立即预约
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">澳门持证师傅</h3>
            <p className="text-gray-600 text-lg">专业资质 · 专业经验 · 值得信赖</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600">牌照号码: {cert.number}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-6">服务保障</h4>
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

      {/* Testimonials with Local Focus */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">澳门本地客户评价</h3>
            <p className="text-gray-600 text-lg">来自澳门半岛、氹仔、路环的真实反馈</p>
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

      {/* Service Areas */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">服务覆盖澳门全境</h3>
            <p className="text-gray-600 text-lg">无论您在澳门哪个区域，我们都提供快速上门服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">澳门半岛</h4>
              <p className="text-gray-600 mb-2">1-2小时内上门</p>
              <p className="text-sm text-gray-500">新葡京、葡京、议事亭前地、新马路等</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">氹仔</h4>
              <p className="text-gray-600 mb-2">1-2小时内上门</p>
              <p className="text-sm text-gray-500">官也街、威尼斯人、银河、路氹城等</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">路环</h4>
              <p className="text-gray-600 mb-2">1-2小时内上门</p>
              <p className="text-sm text-gray-500">路环市区、黑沙海滩、竹湾等</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">联系我们</h3>
            <p className="text-gray-300 text-lg">有任何问题或需要预约服务，请随时联系我们</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">紧急电话</h4>
              <p className="text-gray-300 text-lg font-bold">+853 6611 0985</p>
              <p className="text-gray-400 text-sm">24小时服务</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">邮箱联系</h4>
              <p className="text-gray-300">hmcheng.macau@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">服务时间</h4>
              <p className="text-gray-300">周一至周日 8:00-22:00<br />紧急服务24小时</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">微信预约</h4>
              <p className="text-gray-300">搜索微信号预约</p>
              <p className="text-gray-400 text-sm">澳门用户常用</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white text-gray-900 inline-block px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 cursor-pointer">
              <Phone className="w-5 h-5 inline mr-2" />
              立即预约维修服务
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 三元维修. 保留所有权利.</p>
            <p className="text-gray-400 mt-2">澳门专业持证师傅 · 专业家居维修服务</p>
            <div className="flex justify-center space-x-4 mt-4">
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">粤语</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">普通话</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">English</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">Português</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-center mb-4">
              {selectedService.icon}
            </div>
            <p className="text-gray-600 mb-4">{selectedService.description}</p>
            {selectedService.response && (
              <div className="text-sm text-gray-500 mb-2 flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1" />
                {selectedService.response}
              </div>
            )}
            <div className="text-xl font-bold text-blue-600 mb-4 text-center">{selectedService.price}</div>
            <ul className="space-y-2 mb-6">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <button 
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
                onClick={() => setSelectedService(null)}
              >
                立即预约
              </button>
              <button 
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setSelectedService(null)}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
