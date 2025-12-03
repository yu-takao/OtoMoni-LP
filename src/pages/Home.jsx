
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BellRing, History, Factory, Mic, ClipboardCheck, MessageSquare, Rocket, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HERO_IMAGES = [
  '/hero/hero-1.png',
  '/hero/hero-2.png',
  '/hero/hero-3.png',
];

const ProductFeaturesSection = () => {
  const features = [{
    icon: <BellRing className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />,
    title: "リアルタイム判定通知",
    description: "ウェブアプリ上や管理者メールなど、様々なプラットフォームへすぐに検査結果を通知することが可能です。"
  }, {
    icon: <History className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />,
    title: "検査履歴の蓄積",
    description: "検査データを保存することで、その後の製品品質管理へ活用できます。"
  }, {
    icon: <Mic className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />,
    title: "音でしか拾えない異常を検知",
    description: "マイクで音を拾うため、非接触で、柔軟な機器設置が可能です。"
  }, {
    icon: <Factory className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />,
    title: "幅広い活用領域",
    description: "製造業のお客様を中心に、品質検査や予知保全にご利用いただいています。"
  }];
  return <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900">
            主な機能
          </h2>
          
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20 flex justify-center"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white w-full lg:w-[60%]">
            <img 
              src="https://horizons-cdn.hostinger.com/f3a9ec1a-7812-4e0e-9935-9f1545a02da8/90cec0d596c46ffc01c750956bc4bceb.png" 
              alt="Tomoni Dashboard Interface" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl pointer-events-none" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12">
          {features.map((feature, index) => <motion.div key={index} className="flex items-start" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.1
        }}>
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4 sm:mr-6">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-japanese text-lg sm:text-xl font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="font-japanese mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

const UseCasesSection = () => {
    return (
        <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                        活用事例
                    </h2>
                    <div className="flex justify-center items-center space-x-4 sm:space-x-8 md:space-x-16">
                        <div className="text-center">
                            <img className="h-20 sm:h-24 md:h-32 mx-auto object-contain" alt="Steering wheel with transparent background" src="https://horizons-cdn.hostinger.com/f3a9ec1a-7812-4e0e-9935-9f1545a02da8/a-car-horn-white-background--clean--minimal-eleme-PYrNB.png" />
                            <p className="font-japanese mt-2 text-xs sm:text-sm md:text-base text-gray-700">自動車関連</p>
                        </div>
                        <div className="text-center">
                            <img className="h-20 sm:h-24 md:h-32 mx-auto object-contain" alt="White bookshelf speaker with transparent background" src="https://horizons-cdn.hostinger.com/f3a9ec1a-7812-4e0e-9935-9f1545a02da8/a-speaker--or-a-studio-monitor----do-not-draw-any-YmIxz.png" />
                            <p className="font-japanese mt-2 text-xs sm:text-sm md:text-base text-gray-700">音響関連</p>
                        </div>
                        <div className="text-center">
                            <img className="h-20 sm:h-24 md:h-32 mx-auto object-contain" alt="Industrial pump motor" src="https://horizons-cdn.hostinger.com/f3a9ec1a-7812-4e0e-9935-9f1545a02da8/7e9ba3c8db373cd615ddb21279c94834.png" />
                            <p className="font-japanese mt-2 text-xs sm:text-sm md:text-base text-gray-700">産業機械関連</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const IntroductionStepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "無料診断",
      description: "まずは録音データを送るだけ。AIによる判定精度を無料で診断し、レポートをご提供します。",
      icon: <ClipboardCheck className="w-6 h-6 text-white" />
    },
    {
      number: "02",
      title: "課題ヒアリング",
      description: "具体的な課題や現場の環境についてヒアリングを行い、最適なシステム構成とプランをご提案します。",
      icon: <MessageSquare className="w-6 h-6 text-white" />
    },
    {
      number: "03",
      title: "本導入",
      description: "機器の設置から運用開始まで、専任スタッフがサポート。スムーズな導入を実現します。",
      icon: <Rocket className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900">
            導入ステップ
          </h2>
          <p className="font-japanese mt-4 text-base sm:text-lg text-gray-600">
            お問い合わせから導入まで、スムーズにサポートいたします。
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full z-10"
            >
              <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center mb-6 shadow-md">
                {step.icon}
              </div>
              <span className="text-sm font-bold text-blue-600 mb-2 tracking-wider">STEP {step.number}</span>
              <h3 className="font-japanese text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="font-japanese text-gray-600 leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
              
              {/* Mobile Arrow (Down) - Visible only on mobile, strictly between items */}
              {index < steps.length - 1 && (
                 <div className="md:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-gray-300 z-0">
                   <ChevronRight className="w-8 h-8 rotate-90" />
                 </div>
              )}
            </motion.div>
          ))}

          {/* Desktop Arrows (Right) - Absolute positioning relative to grid container */}
          <div className="hidden md:flex absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-0 justify-between pointer-events-none px-[16.66%]">
              {/* Arrow between 1 and 2 */}
              <div className="text-gray-300 transform translate-x-1/2 -mt-8">
                <ChevronRight className="w-10 h-10" />
              </div>
              {/* Arrow between 2 and 3 */}
              <div className="text-gray-300 transform translate-x-1/2 -mt-8">
                 <ChevronRight className="w-10 h-10" />
              </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to="/contact">
            <Button variant="outline" className="font-japanese border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-8 py-6 rounded-full text-base">
              詳しくはお問い合わせください
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question: "騒音が大きい環境でも使えますか？",
      answer: "指向性マイクの利用やノイズ除去、環境音込みの学習により、騒音環境下でもご利用いただけます。"
    },
    {
      question: "異常データがほとんどありません。",
      answer: "正常データ中心で始められるため問題ありません。"
    },
    {
      question: "設置先の機械を改造する必要はある？",
      answer: "端末単体で動作するため、特に設置先の改造は必要ありません。"
    },
    {
      question: "導入までにどれくらい時間がかかりますか？",
      answer: "無料トライアルが最短3日で開始可能です。"
    },
    {
      question: "補助金は使えますか？",
      answer: "はい、ご利用いただけます。弊社の補助金活用サポートにより、現時点での補助金活用導入実績は100%です。"
    },
    {
      question: "費用について。",
      answer: "まずは無料でお試しいただけます。その後の導入費用はお問い合わせください。"
    }
  ];
  return <section className="py-20 bg-white"> {/* Changed to bg-white to alternate */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-4">
            よくあるご質問
          </h2>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-japanese hover:no-underline text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-japanese text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </motion.div>
      </div>
    </section>;
};

const Home = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000); // 10秒ごとに切り替え

    return () => clearInterval(interval);
  }, []);

  return <>
      <Helmet>
        <title>オトモニ</title>
        <meta
          name="description"
          content="オトモニは、AIを活用して音の異常を検知し、製造現場の品質向上とコスト削減を支援する異音検知システムです。"
        />
      </Helmet>

      <div className="bg-white">
        <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 lg:pt-0 lg:pb-0 overflow-hidden">
          {/* 背景スライドショー（背面） */}
          <div className="absolute inset-0 z-0">
            {HERO_IMAGES.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentHeroIndex === index ? 1 : 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
            {/* 黒のオーバーレイで背景を暗くし、テキストを際立たせる */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
          {/* コンテンツは最前面に */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-[-12px] sm:mt-[-24px]"
              >
                {/* Removed the paragraph as requested */}
                <h1 className="font-japanese text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-10 leading-tight">
                  <span className="block">すべての製造現場へ。</span>
                  <span className="block mt-4">AIで“音の異常”を見える化する。</span>
                </h1>

                <Link to="/contact" className="mt-[50px] inline-block">
                  <Button className="font-japanese bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    資料請求・無料トライアル
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <ProductFeaturesSection />
        <UseCasesSection />
        <IntroductionStepsSection />
        <FaqSection />

      </div>
    </>;
};
export default Home;
