'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'
import * as fbq from '@/lib/fpixel'

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  rating: number
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const categories = ['Todos', 'Feminino', 'Masculino', 'Acessórios', 'Novidades']

  const products: Product[] = [
    {
      id: 1,
      name: 'Blazer Premium Feminino',
      category: 'Feminino',
      price: 459.9,
      originalPrice: 699.9,
      image: '#',
      badge: 'Novo',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Camisa Social Masculina',
      category: 'Masculino',
      price: 189.9,
      image: '#',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Vestido Longo Elegante',
      category: 'Feminino',
      price: 349.9,
      image: '#',
      badge: 'Destaque',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Relógio Minimalista',
      category: 'Acessórios',
      price: 299.9,
      originalPrice: 449.9,
      image: '#',
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Jaqueta Jeans Premium',
      category: 'Masculino',
      price: 399.9,
      image: '#',
      badge: 'Bestseller',
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Bolsa de Couro Italiana',
      category: 'Acessórios',
      price: 589.9,
      image: '#',
      rating: 5.0,
    },
    {
      id: 7,
      name: 'Saia Midi Sofisticada',
      category: 'Feminino',
      price: 259.9,
      image: '#',
      badge: 'Novo',
      rating: 4.6,
    },
    {
      id: 8,
      name: 'Tênis Casual Premium',
      category: 'Masculino',
      price: 449.9,
      image: '#',
      rating: 4.8,
    },
  ]

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Coleção <span className="text-gradient">Exclusiva</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peças selecionadas com as últimas tendências da moda internacional
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-luxury transition-all duration-300"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              )}

              {/* Favorite Button */}
              <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 hover:fill-red-500 transition-colors" />
              </button>

              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-gray-300">
                    {product.id}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      fbq.trackAddToCart({
                        id: product.id.toString(),
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                      })
                    }}
                    className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Adicionar ao Carrinho</span>
                  </motion.button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating}
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">{product.category}</p>

                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {product.originalPrice && (
                  <span className="inline-block mt-2 text-xs font-semibold text-green-600">
                    Economize R${' '}
                    {(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Ver Toda a Coleção
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
