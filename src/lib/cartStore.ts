'use client'
import { useState, useEffect } from 'react'

export interface CartItem {
  _id: string
  name: string
  price: number
  unit: string
  quantity: number
  image?: string
  slug: string
}

const CART_KEY = 'hh_cart'

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export function addToCart(item: Omit<CartItem, 'quantity'>, qty = 1) {
  const cart = getCart()
  const existing = cart.find(i => i._id === item._id)
  if (existing) {
    existing.quantity += qty
  } else {
    cart.push({ ...item, quantity: qty })
  }
  saveCart(cart)
  window.dispatchEvent(new Event('cartUpdate'))
}

export function removeFromCart(id: string) {
  const cart = getCart().filter(i => i._id !== id)
  saveCart(cart)
  window.dispatchEvent(new Event('cartUpdate'))
}

export function updateQuantity(id: string, qty: number) {
  const cart = getCart()
  const item = cart.find(i => i._id === id)
  if (item) {
    item.quantity = qty
    if (item.quantity <= 0) {
      saveCart(cart.filter(i => i._id !== id))
    } else {
      saveCart(cart)
    }
  }
  window.dispatchEvent(new Event('cartUpdate'))
}

export function clearCart() {
  saveCart([])
  window.dispatchEvent(new Event('cartUpdate'))
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    setCart(getCart())
    const handler = () => setCart(getCart())
    window.addEventListener('cartUpdate', handler)
    return () => window.removeEventListener('cartUpdate', handler)
  }, [])

  return {
    cart,
    total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
    count: cart.reduce((sum, i) => sum + i.quantity, 0),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }
}
