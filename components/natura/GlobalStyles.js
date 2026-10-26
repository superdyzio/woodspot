// Page-wide tokens, resets and the few primitives shared by every section.
// Resets use :where() so they carry no specificity and any component class wins over them.
export default function GlobalStyles() {
    return (
        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
            background: #002902;
          }

          * {
            box-sizing: border-box;
          }

          :where(a) {
            color: #002902;
          }

          :where(a:hover) {
            color: #8A6114;
          }

          :where(.natura) :where(h1, h2, h3, p, ul, ol, dl, dd, figure) {
            margin: 0;
          }

          :where(.natura) :where(ul, ol) {
            padding: 0;
            list-style: none;
          }

          :where(.natura) :where(select, input, textarea, button) {
            font: inherit;
          }

          :where(.natura) :where(button) {
            cursor: pointer;
          }

          .natura {
            --serif: var(--font-fraunces), Georgia, 'Times New Roman', serif;
            --sans: var(--font-manrope), 'Segoe UI', system-ui, sans-serif;
            --gutter: clamp(20px, 2.8vw, 40px);
            --section-y: clamp(64px, 8.4vw, 120px);
            display: flex;
            flex-direction: column;
            font-family: var(--sans);
            color: #0F1A10;
            background: #002902;
            -webkit-font-smoothing: antialiased;
          }

          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 var(--gutter);
          }

          .eyebrow {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #8A6114;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            min-height: 56px;
            padding: 0 28px;
            border: 0;
            border-radius: 2px;
            background: #002902;
            color: #FFFFFF;
            font-family: var(--sans);
            font-size: 16px;
            font-weight: 700;
            text-decoration: none;
          }

          .btn--md {
            min-height: 52px;
            padding: 0 24px;
            font-size: 15px;
          }

          .btn--light {
            background: #FFFFFF;
            color: #002902;
          }

          .btn--ghost {
            background: transparent;
            border: 1.5px solid rgba(255, 255, 255, 0.7);
            color: #FFFFFF;
          }

          .btn--outline {
            background: transparent;
            border: 1.5px solid #002902;
            color: #002902;
          }

          @media (min-width: 641px) {
            .only-m {
              display: none !important;
            }
          }

          @media (max-width: 640px) {
            .natura {
              --gutter: 20px;
              --section-y: 56px;
            }

            .eyebrow {
              font-size: 12px;
            }

            .only-d {
              display: none !important;
            }
          }
        `}</style>
    );
}
