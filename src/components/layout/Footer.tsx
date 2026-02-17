export default function Footer() {
  return (
    <>
    <footer className="relative bg-gray-900 text-gray-300 z-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-bold text-white mb-4">Qalzy</div>
            <p className="text-sm">Smart health & wellness platform</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">

              <li>AI Calorie Scanner</li>
              <li>Calorie Tracking</li>
              <li>Blog</li>
              <li>Shop</li>

            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">YouTube</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} Qalzy. All rights reserved.
        </div>
      </div>
    </footer>
    </>
  )
}