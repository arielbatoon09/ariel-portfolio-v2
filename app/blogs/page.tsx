export default function Blogs() {
  return (
    <section className="bg-gray-50 h-screen flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Blogs</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the blog section! Stay tuned for updates, articles, and insights.
        </p>
        <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm mx-auto">
          <p className="text-gray-500">No blog posts available yet. Check back soon!</p>
        </div>
      </div>
    </section>
  );
}