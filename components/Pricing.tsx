'use client';

import { Check, Shield, Clock, Headphones } from 'lucide-react';

const features = [
  'Custom Software Development',
  'Cloud Infrastructure Setup',
  'Cybersecurity Implementation',
  'Digital Transformation Consulting',
  '24/7 Technical Support',
  'Monthly Performance Reports',
  'Dedicated Account Manager',
  'Priority Response Time',
];

const trustIndicators = [
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'SSL encrypted transactions',
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Get started in 24 hours',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Always here to help',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our comprehensive technology solution package
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">Professional Package</h3>
              <p className="text-blue-100">Everything you need to succeed</p>
            </div>

            <div className="p-12">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl text-gray-600 font-semibold">$</span>
                  <span className="text-7xl font-bold text-gray-900">29</span>
                  <span className="text-2xl text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">Billed monthly, cancel anytime</p>
              </div>

              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h4>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Check className="text-blue-600" size={16} />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              >
                Get Started Now
              </a>

              <p className="text-center text-gray-500 text-sm mt-6">
                No hidden fees. Cancel anytime. 30-day money-back guarantee.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{indicator.title}</h4>
                  <p className="text-gray-600 text-sm">{indicator.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}