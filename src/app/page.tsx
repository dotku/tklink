import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-24 max-w-3xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">TK Link</h1>
        <h2 className="text-2xl text-gray-800 mb-6">
          Enhance Your TikTok Shop Links
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Tired of sharing those long, ugly TikTok Shop links? Our app helps you
          generate sleek, custom links that are easy to share and look great.
        </p>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <p className="text-gray-500">Instead of an ugly link like:</p>
          <p className="text-gray-700 font-mono">
            <a href="https://vt.tiktok.com/ZTNsJjVJ6/?page=TikTokShop">
              https://vt.tiktok.com/ZTNsJjVJ6/?page=TikTokShop
            </a>
          </p>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          You can have a beautiful, branded link like:
        </p>
        <div className="bg-blue-100 text-blue-800 shadow-md rounded-lg p-6 mb-6">
          <p className="font-mono">
            <a href="https://vt.tiktok.com/ZTNsJjVJ6/?page=TikTokShop">
              https://tklink.vercel.com/dkgadgets
            </a>
          </p>
        </div>
        <p className="text-2xl text-gray-800 mb-6">How?</p>
        <p className="text-lg text-gray-600 mb-6">It is comming soon...</p>
      </section>
      <Footer />
    </main>
  );
}
