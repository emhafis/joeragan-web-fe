export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pb-12 pt-4 px-8 xl:px-32">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <p className="text-gray-500 text-sm">
            © Copyright Joeragan Properti 2025. All Right Reserved.
          </p>

          <div className="flex items-center gap-6">
            <h3 className="font-semibold text-gray-900">
            Get In Touch
          </h3>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@pertamina"
              title="Tiktok"
              aria-label="Tiktok"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-primary transition-all duration-200"
            >
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1619 8.46719C17.4422 8.4713 15.7646 7.93498 14.3662 6.93398V13.9152C14.3657 15.2082 13.9705 16.4703 13.2334 17.5326C12.4963 18.5949 11.4525 19.4069 10.2414 19.86C9.03041 20.313 7.70993 20.3856 6.45656 20.0679C5.20319 19.7502 4.07667 19.0574 3.22765 18.0822C2.37862 17.107 1.84756 15.8959 1.70546 14.6107C1.56336 13.3255 1.817 12.0276 2.43247 10.8905C3.04794 9.75336 3.9959 8.83124 5.1496 8.24741C6.30329 7.66359 7.60773 7.44589 8.88848 7.62344V11.1348C8.30241 10.9504 7.67306 10.956 7.09033 11.1506C6.5076 11.3453 6.00128 11.7191 5.64367 12.2187C5.28606 12.7183 5.09546 13.3181 5.09908 13.9325C5.1027 14.5468 5.30035 15.1444 5.66382 15.6397C6.02729 16.135 6.53798 16.5029 7.12296 16.6907C7.70795 16.8784 8.33731 16.8766 8.92118 16.6853C9.50504 16.4941 10.0135 16.1233 10.3741 15.6258C10.7346 15.1283 10.9287 14.5296 10.9287 13.9152V0.267578H14.3662C14.3638 0.557867 14.3881 0.84776 14.4389 1.13359C14.5583 1.77167 14.8067 2.37867 15.1688 2.91747C15.5309 3.45627 15.9991 3.91554 16.5447 4.26719C17.3211 4.7805 18.2312 5.0541 19.1619 5.05391V8.46719Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" title="Instagram" className="text-gray-700 hover:text-primary transition">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" title="Facebook" className="text-gray-700 hover:text-primary transition">
              <svg
                width="21"
                height="21"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" title="YouTube" className="text-gray-700 hover:text-primary transition">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.6 2.5 12 2.5 12 2.5h-.1s-5.6 0-8.6.4c-.5.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S0 8 0 9.8v1.4C0 13 0.5 14.8.5 14.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.1 7.2.4 8.3.4h.1s5.6 0 8.6-.4c.5-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.5-1.8.5-3.6V9.8c0-1.8-.5-3.6-.5-3.6zM9.7 13.5V7.9l5.6 2.8-5.6 2.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
