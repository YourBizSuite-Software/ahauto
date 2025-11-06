export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container py-6 text-sm text-gray-600 flex justify-between flex-wrap gap-3">
        <p>© {new Date().getFullYear()} AH Auto Services</p>
        <p>
          Developed by{" "}
          <a
            href="https://yourbizsuite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 font-semibold"
          >
            YourBizSuite Software
          </a>
        </p>
      </div>
    </footer>
  );
}