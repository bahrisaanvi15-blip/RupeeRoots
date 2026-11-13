import type { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'module-1',
    title: 'Module 1',
    subtitle: 'Finance Fundamentals',
    description:
      'This module establishes the analytical foundations of financial decision-making. It examines the relationship between risk and return, the role of time value, and the logic behind value creation in corporate settings. Students are introduced to the financial concepts that underpin capital allocation, investment evaluation, and capital market behaviour.',
    researchPapers: [
      {
        title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
        authors: 'Modigliani & Miller',
        year: '1958',
        summary: 'Foundational analysis of corporate valuation and investment under uncertainty.',
        url: 'https://www.jstor.org/stable/10.2307/2550593',
      },
      {
        title: 'Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk',
        authors: 'Sharpe',
        year: '1964',
        summary: 'Classic treatment of risk-adjusted return and equilibrium pricing.',
        url: 'https://www.jstor.org/stable/10.2307/2977928',
      },
    ],
    lessons: [
      {
        id: 'lesson-1',
        title: 'Risk and Return',
        summary: 'The expected return on an asset reflects the compensation required for bearing uncertainty.',
        explanation: `
          In corporate finance, the relationship between risk and return is central to every decision. Investors do not value an opportunity only by its expected payoff; they also price the uncertainty surrounding that payoff. A higher expected return is normally required for a project or security that carries greater variability, default risk, or systematic exposure. This principle underpins capital market theory and provides the benchmark for evaluating financial decisions within firms.

          Risk can be decomposed into systematic risk and firm-specific risk. Systematic risk is the component that cannot be diversified away and therefore commands a premium under equilibrium pricing. Firm-specific risk may be reduced through diversification and is therefore less relevant to required return in a well-functioning market. This distinction explains why managerial decision-making must be framed not merely in accounting terms but in risk-adjusted financial terms.

          For firms, the implication is direct: value creation depends on generating returns above the required rate of return compatible with project risk. Financial managers must therefore ensure that investment opportunities compensate investors for the risk they are assuming. The risk-adjusted hurdle rate becomes the gateway through which projects are evaluated and capital allocated.
        `,
        simpleExplanation: 'The greater the uncertainty, the higher the return investors usually demand.',
        example: 'A start-up venture may promise strong upside, but it must offer compensating returns because its cash flows are volatile.',
        analogy: 'Risk is like navigating a narrow mountain path: the more unstable the route, the higher the reward expected for taking it.',
        reflectionQuestion: 'Why do investors require a higher expected return from riskier investments?',
        options: [
          'Because riskier assets demand compensation for uncertainty',
          'Because companies always pay more dividends to risky firms',
          'Because risk reduces the market value of securities',
          'Because regulation requires higher profitability for risky projects',
        ],
        correctAnswer: 'Because riskier assets demand compensation for uncertainty',
        term: 'Risk and Return',
        researchPapers: [
          {
            title: 'Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk',
            authors: 'William F. Sharpe',
            year: '1964',
            summary: 'Introduces the capital asset pricing model and the pricing of systematic risk.',
            url: 'https://www.jstor.org/stable/10.2307/2977928',
          },
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Modigliani and Miller',
            year: '1958',
            summary: 'Establishes the foundations of corporate valuation and investment under uncertainty.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
      {
        id: 'lesson-2',
        title: 'Time Value of Money',
        summary: 'A pound today is worth more than a pound in the future because it can be invested and earn returns.',
        explanation: `
          The time value of money is one of the most fundamental principles in corporate finance. It states that a sum of money available now is worth more than the same nominal amount in the future because the present amount can be invested to generate returns. This logic makes discounting and compounding central to valuation, project selection, and financing analysis.

          Discounting converts future cash flows into present value terms, allowing firms to compare alternative investments on a common basis. Compounding captures the accumulation of value over time. Together, they permit financial managers to assess whether a project creates value by generating returns above an appropriate opportunity cost of capital.

          In practice, the time value of money informs the pricing of bonds, the valuation of equity, and the decision to invest in long-lived capital projects. The same logic also explains why debt contracts include interest payments and why investors demand compensation for postponing consumption.
        `,
        simpleExplanation: 'Money now is more valuable than the same money later because it can earn a return.',
        example: 'Receiving £10,000 today is more valuable than receiving £10,000 three years from now because you can invest today’s amount immediately.',
        analogy: 'A pound now is like a seed planted immediately; a pound later is a seed that has not yet been planted.',
        reflectionQuestion: 'Why is the present value of a future cash flow lower than its nominal value?',
        options: [
          'Because future cash flows always carry greater uncertainty',
          'Because money has opportunity cost and can earn returns over time',
          'Because inflation always reduces the value of cash',
          'Because investors prefer debt over equity',
        ],
        correctAnswer: 'Because money has opportunity cost and can earn returns over time',
        term: 'Time Value of Money',
        researchPapers: [
          {
            title: 'The Theory of Interest',
            authors: 'Irving Fisher',
            year: '1930',
            summary: 'Classic analysis of time preference, intertemporal choice, and interest.',
            url: 'https://archive.org/details/theoryofinterest00fish',
          },
        ],
      },
      {
        id: 'lesson-3',
        title: 'Value Creation',
        summary: 'A firm creates value when it deploys capital in projects that produce returns exceeding the cost of capital.',
        explanation: `
          Value creation is the central objective of corporate finance. A firm does not create value simply by increasing revenue or producing more units; it creates value by earning returns that exceed the returns required by investors for the capital employed. The difference between a project’s return and the cost of capital is the economic surplus generated for shareholders.

          This principle is operationalised through capital budgeting and discounted cash flows. Managers compare expected project cash flows with the required rate of return and accept investments only when they generate positive net present value. In this framework, value is created only when the present value of benefits exceeds the present value of costs.

          Therefore, sound financial management is not merely about growth or expansion for its own sake. Strategic investment must be disciplined by return thresholds, expected cash flows, and capital market conditions. Value creation is a function of both investment quality and financing efficiency.
        `,
        simpleExplanation: 'A business creates value when it earns more than the minimum return required by its investors.',
        example: 'If a project costs £1 million and yields a present value of £1.2 million at the firm’s cost of capital, it creates economic value.',
        analogy: 'Value creation is like a business earning a return above the cost of borrowing the capital needed to operate.',
        reflectionQuestion: 'When does an investment create shareholder value?',
        options: [
          'When it increases accounting profit regardless of cost',
          'When its expected return exceeds the cost of capital',
          'When it increases market share immediately',
          'When it reduces cash flow volatility',
        ],
        correctAnswer: 'When its expected return exceeds the cost of capital',
        term: 'Value Creation',
        researchPapers: [
          {
            title: 'A Theory of the Firm',
            authors: 'Coase',
            year: '1937',
            summary: 'Classic foundation for understanding firm behaviour and resource allocation.',
            url: 'https://www.jstor.org/stable/2393951',
          },
        ],
      },
      {
        id: 'lesson-4',
        title: 'Equity and Preference Shares',
        summary: 'Ordinary equity and preference shares differ in claim priority, control rights, and risk-return profiles.',
        explanation: `
          Equity financing comes in different forms. Ordinary shares represent residual ownership in the firm. They give voting rights and participation in the upside, but their claims are subordinate to debt and preference shareholders. This residual claim structure means ordinary shareholders bear the greatest uncertainty, yet they also stand to benefit most from strong long-term performance.

          Preference shares are hybrid securities. They generally provide a fixed dividend and rank above ordinary equity in the distribution of dividends and liquidation proceeds, but usually below debt. Preference shareholders typically receive less upside than ordinary shareholders and often have limited or no voting rights. As a result, preference financing is often viewed as a compromise between debt and ordinary equity.

          The choice between issuing ordinary equity and preference shares is strategic. Ordinary equity may dilute control and increase expected return demands, whereas preference shares can reduce immediate dilution but may impose a fixed dividend burden. The optimal financing choice depends on the firm’s risk profile, governance objectives, and market conditions.
        `,
        simpleExplanation: 'Ordinary shares carry more risk and more upside; preference shares offer steadier income and seniority over ordinary shares.',
        example: 'A mature company may issue preference shares to raise finance without giving away voting control, while a growth firm may prefer ordinary equity to attract long-term capital.',
        analogy: 'Ordinary equity is like full partnership rights in a venture, while preference shares are like a senior claim with a fixed promise but limited upside.',
        reflectionQuestion: 'What is the main distinction between ordinary equity and preference shares?',
        options: [
          'Preference shares usually have fixed dividends and rank above ordinary shares in priority',
          'Ordinary shares have priority over preference shares in dividends',
          'Preference shares always carry voting rights',
          'Ordinary shares are legally debt instruments',
        ],
        correctAnswer: 'Preference shares usually have fixed dividends and rank above ordinary shares in priority',
        term: 'Equity vs Preference Shares',
        researchPapers: [
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Modigliani and Miller',
            year: '1958',
            summary: 'Core analysis of financing claims, capital structure, and shareholder value.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
          {
            title: 'Bankruptcy Costs and the Agency Costs of Debt',
            authors: 'Jensen and Meckling',
            year: '1976',
            summary: 'Explains how financing structure interacts with firm value and managerial incentives.',
            url: 'https://www.jstor.org/stable/10.2307/2788528',
          },
        ],
      },
      {
        id: 'lesson-5',
        title: 'Capital Structure Logic',
        summary: 'Capital structure determines how the firm balances debt, equity, and hybrid claims to minimise financing costs while preserving value.',
        explanation: `
          Capital structure is the balance between debt, equity, and hybrid securities that a firm uses to finance its assets. The financing mix matters because each source carries different risk, cost, and governance consequences. Debt tends to be cheaper because interest is tax-deductible and creditors rank ahead of equity holders. However, debt also increases financial distress risk and can constrain managerial flexibility.

          Equity is more expensive but less risky from the firm’s perspective because there is no mandatory payout. Ordinary equity also provides ownership and governance rights. Preference shares occupy an intermediate space, offering fixed income characteristics without the same insolvency exposure as debt.

          Firms therefore seek an optimal capital structure that balances the tax benefits of leverage against expected bankruptcy and agency costs. In a frictionless world, the Modigliani-Miller propositions suggest financing mix does not affect value, but real-world imperfections mean capital structure is a strategic decision with material consequences.
        `,
        simpleExplanation: 'Capital structure is the mix of financing instruments a company uses to support its investments.',
        example: 'A highly levered firm may enjoy tax shields on debt but face greater default risk if operating conditions deteriorate.',
        analogy: 'Capital structure is like choosing the balance of supports under a bridge: too little support is risky, but too much may be unnecessarily costly.',
        reflectionQuestion: 'Why does debt sometimes lower the cost of capital even though it increases financial risk?',
        options: [
          'Because debt is always cheaper than equity and never creates risk',
          'Because interest payments are tax-deductible, but leverage also raises distress risk',
          'Because debt does not require any repayment',
          'Because creditors are entitled to ownership rights',
        ],
        correctAnswer: 'Because interest payments are tax-deductible, but leverage also raises distress risk',
        term: 'Capital Structure',
        researchPapers: [
          {
            title: 'Determinants of Capital Structure',
            authors: 'Titman and Wessels',
            year: '1988',
            summary: 'Empirical evidence on how firms choose debt versus equity financing.',
            url: 'https://www.jstor.org/stable/2771307',
          },
        ],
      },
    ],
  },
  {
    id: 'module-2',
    title: 'Module 2',
    subtitle: 'Capital Markets',
    description:
      'This module analyses how capital markets allocate funds, price risk, and discipline firms through investor expectations. It situates financing and valuation in the broader context of market efficiency, agency conflicts, and governance.',
    researchPapers: [
      {
        title: 'The Efficient Capital Market: A Review of Theory and Empirical Work',
        authors: 'Fama',
        year: '1970',
        summary: 'Seminal discussion of information efficiency and market pricing.',
        url: 'https://www.jstor.org/stable/2325486',
      },
      {
        title: 'The Market for “Lemons”: Quality Uncertainty and the Market Mechanism',
        authors: 'Akerlof',
        year: '1970',
        summary: 'Shows how information asymmetry affects market prices and firm financing.',
        url: 'https://www.jstor.org/stable/1879431',
      },
    ],
    lessons: [
      {
        id: 'lesson-6',
        title: 'Market Efficiency',
        summary: 'Financial markets process information efficiently, but not necessarily perfectly or instantly.',
        explanation: `
          Market efficiency concerns the extent to which security prices reflect available information. In the strongest form, prices incorporate all public and private information, making it difficult for investors to consistently earn abnormal returns. In practice, markets are not perfectly efficient at all times, but they are sufficiently competitive that mispricing opportunities are often limited and short-lived.

          The concept matters because corporate finance relies on market prices for valuation, investor expectations, and capital raising. Firms that issue securities in highly informative markets can often access finance at more competitive terms. Yet market efficiency does not imply perfect pricing; frictions such as noise, behavioural biases, illiquidity, and information asymmetry can create opportunities and distortions.
        `,
        simpleExplanation: 'Market prices often reflect information, but not always perfectly or immediately.',
        example: 'A firm announcing a major acquisition may see its share price change quickly as investors revise expected cash flows and risk.',
        analogy: 'Capital markets are like a highly informed crowd, though sometimes the crowd reacts before the full story is known.',
        reflectionQuestion: 'How does market efficiency influence corporate financing decisions?',
        options: [
          'It guarantees the perfect valuation of every project',
          'It constrains arbitrage and affects how quickly prices reflect information',
          'It eliminates all uncertainty in capital markets',
          'It increases the cost of capital for all firms',
        ],
        correctAnswer: 'It constrains arbitrage and affects how quickly prices reflect information',
        term: 'Market Efficiency',
        researchPapers: [
          {
            title: 'The Efficient Capital Market: A Review of Theory and Empirical Work',
            authors: 'Fama',
            year: '1970',
            summary: 'Groundbreaking review of empirical evidence and theory behind efficient markets.',
            url: 'https://www.jstor.org/stable/2325486',
          },
        ],
      },
      {
        id: 'lesson-7',
        title: 'Information Asymmetry',
        summary: 'Managers often know more about the firm than outside investors, creating adverse selection and agency concerns.',
        explanation: `
          Information asymmetry is central to corporate finance. Managers and insiders typically possess more information than outside investors about the firm’s true prospects, governance quality, and risk profile. This asymmetry creates frictions in securities markets and influences financing choices, disclosure requirements, and investor pricing.

          When information is unevenly distributed, investors may distrust issuance terms and demand an information premium. This can increase the cost of externally raised capital and lead firms to prefer internal financing or carefully structured securities. The market for lemons described by Akerlof illustrates how uncertainty about quality can undermine trust in markets.

          Information asymmetry also connects to agency theory: managers may not fully align with outside investors, creating incentives to pursue private benefits or understate risk. This makes governance mechanisms, auditing, and disclosure crucial instruments in financial markets.
        `,
        simpleExplanation: 'When managers know more than investors, capital markets become less certain and more expensive to navigate.',
        example: 'A firm may issue shares when it knows its prospects are weak, causing investors to discount the securities because of adverse selection.',
        analogy: 'Information asymmetry is like trading in a market where one party has a hidden map while the other is guessing the route.',
        reflectionQuestion: 'Why does information asymmetry matter for capital raising?',
        options: [
          'It always lowers the cost of capital for all firms',
          'It creates uncertainty that can increase financing costs and reduce trust',
          'It eliminates market risk',
          'It guarantees investor protection',
        ],
        correctAnswer: 'It creates uncertainty that can increase financing costs and reduce trust',
        term: 'Information Asymmetry',
        researchPapers: [
          {
            title: 'The Market for “Lemons”: Quality Uncertainty and the Market Mechanism',
            authors: 'George A. Akerlof',
            year: '1970',
            summary: 'Classic theory of how hidden information distorts market outcomes.',
            url: 'https://www.jstor.org/stable/1879431',
          },
        ],
      },
      {
        id: 'lesson-8',
        title: 'Agency Theory',
        summary: 'Managers and shareholders may have divergent objectives, creating agency costs and governance challenges.',
        explanation: `
          Agency theory examines the conflicts that arise when agents act on behalf of principals. In corporations, managers act as agents for shareholders, but their objectives may not perfectly align with those of owners. Agency costs arise when managers pursue empire building, managerial perks, or overly conservative decisions that do not maximise shareholder value.

          Corporate governance mechanisms are designed to reduce these frictions. Boards, incentive contracts, monitoring, audits, and shareholder rights align managerial behaviour with value creation. Leverage can also discipline managers by increasing the cost of poor decisions, but it can also exacerbate financial distress if used imprudently.

          The core insight is that governance is not a technical afterthought: it is central to financing and strategic decision-making. Without effective controls, the firm may fail to allocate capital to its highest-value uses.
        `,
        simpleExplanation: 'Managers and owners do not always share the same objectives, so governance matters.',
        example: 'A manager may pursue expansion despite weak returns because it increases personal prestige, even when shareholders would prefer capital discipline.',
        analogy: 'Agency theory is like a principal giving power to an agent who may not always act in the principal’s best interests.',
        reflectionQuestion: 'Why do corporations use governance mechanisms?',
        options: [
          'To eliminate all market risk',
          'To align managerial behaviour with shareholder interests',
          'To guarantee higher dividends',
          'To reduce corporate tax liabilities automatically',
        ],
        correctAnswer: 'To align managerial behaviour with shareholder interests',
        term: 'Agency Theory',
        researchPapers: [
          {
            title: 'Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure',
            authors: 'Jensen and Meckling',
            year: '1976',
            summary: 'Seminal work on agency conflicts and ownership structure.',
            url: 'https://www.jstor.org/stable/10.2307/258011',
          },
        ],
      },
      {
        id: 'lesson-9',
        title: 'Dividend Policy',
        summary: 'Dividend policy balances the desire to distribute cash to shareholders with the need to retain earnings for growth and investment.',
        explanation: `
          Dividend policy is a key element of financial strategy. Firms must decide how much cash to distribute to shareholders versus retain internally for reinvestment. Retained earnings can fund future projects, but paying dividends can signal confidence and satisfy investor preferences for regular cash flows.

          Under perfect capital markets, dividend policy may not affect firm value, but in practice investor taxation, signalling, liquidity preferences, and agency costs can make payout policy relevant. A stable dividend can reduce uncertainty for investors and enhance credibility, while a cut in dividends may signal deteriorating fundamentals.

          In modern corporate finance, the ability to maintain an appropriate payout policy is a core test of financial discipline. It reflects the firm’s growth opportunities, earnings quality, and strategic priorities.
        `,
        simpleExplanation: 'Dividend policy is about how much profit the firm pays out versus how much it keeps for investment.',
        example: 'A mature company with limited growth opportunities may prefer regular dividends, while a young growth firm may retain earnings to fund expansion.',
        analogy: 'Dividend policy is like deciding whether to harvest returns now or reinvest them to grow the orchard.',
        reflectionQuestion: 'Why might a firm retain earnings rather than distribute them as dividends?',
        options: [
          'To reduce corporate taxes permanently',
          'To finance profitable future investment opportunities',
          'To avoid any shareholder communication',
          'To lower the firm’s cost of debt automatically',
        ],
        correctAnswer: 'To finance profitable future investment opportunities',
        term: 'Dividend Policy',
        researchPapers: [
          {
            title: 'Dividend Policy, Growth, and the Valuation of Shares',
            authors: 'Walter',
            year: '1963',
            summary: 'Early theoretical approach linking dividend policy, growth, and share valuation.',
            url: 'https://www.jstor.org/stable/2329986',
          },
        ],
      },
      {
        id: 'lesson-10',
        title: 'Corporate Governance',
        summary: 'Governance structures influence how firms manage risk, investment, and accountability to capital providers.',
        explanation: `
          Corporate governance refers to the system of rules, incentives, and oversight that governs the behaviour of managers and the board. It influences strategic decision-making, disclosure quality, risk management, and the alignment of managerial incentives with shareholder interests.

          Strong governance reduces agency costs and improves access to capital by lowering perceived risk. Weak governance allows managerial opportunism, increasing the risk premium demanded by investors and limiting the firm’s strategic options. The governance structure therefore affects both the cost and availability of finance.

          In practice, governance issues are central to mergers, leverage, executive pay, board composition, and disclosure policy. Financial analysis must therefore evaluate not just accounting performance but also the underlying control architecture of the firm.
        `,
        simpleExplanation: 'Governance quality shapes whether managers act in the interests of owners and investors.',
        example: 'A firm with a robust independent board and transparent reporting is often able to raise finance at a lower cost than one with weak oversight.',
        analogy: 'Corporate governance is like the steering system of a vehicle: without it, even a powerful engine may lead the firm off course.',
        reflectionQuestion: 'Why is corporate governance relevant to finance?',
        options: [
          'Because it determines whether managerial decisions support long-term shareholder value',
          'Because it reduces the need for financial analysis',
          'Because it guarantees positive earnings',
          'Because it always lowers the cost of debt',
        ],
        correctAnswer: 'Because it determines whether managerial decisions support long-term shareholder value',
        term: 'Corporate Governance',
        researchPapers: [
          {
            title: 'The Corporate Governance Problem',
            authors: 'Mayer',
            year: '1997',
            summary: 'Discussion of governance as a central issue in modern corporate control and finance.',
            url: 'https://academic.oup.com/qje/article-abstract/82/1/41/1888598',
          },
        ],
      },
    ],
  },
  {
    id: 'module-3',
    title: 'Module 3',
    subtitle: 'Cost of Capital',
    description:
      'This module explores the calculation and interpretation of the cost of capital, showing how financing choices influence investment decisions and firm valuation.',
    researchPapers: [
      {
        title: 'A Simple Positive Model of Capital Structure',
        authors: 'Miller',
        year: '1977',
        summary: 'Incorporates tax effects and the trade-off between debt and equity financing.',
        url: 'https://www.jstor.org/stable/2326484',
      },
    ],
    lessons: [
      {
        id: 'lesson-11',
        title: 'Weighted Average Cost of Capital',
        summary: 'WACC blends the required returns on all sources of finance in proportion to their contribution to capital structure.',
        explanation: `
          The weighted average cost of capital (WACC) is a benchmark return used to evaluate projects and investments. It reflects the average required return demanded by providers of both debt and equity, weighted by their market value proportions in the firm’s capital structure. WACC is central because it translates financing strategy into an investment hurdle rate.

          A project should be undertaken only if its expected return exceeds the WACC, assuming comparable risk. This is the essence of value-based capital budgeting. However, WACC is not a static number: it changes with leverage, risk, interest rates, and capital market conditions. Thus, the cost of capital must be re-estimated when the firm’s financing mix or risk profile changes materially.
        `,
        simpleExplanation: 'WACC is the blended cost of the debt and equity that finance the firm.',
        example: 'If a company has 60% equity at 12% and 40% debt at 5%, its WACC may be around 9%, depending on tax effects and capital structure weights.',
        analogy: 'WACC is like the average interest rate a firm must pay to all of its financial stakeholders.',
        reflectionQuestion: 'Why is WACC used as a discount rate in capital budgeting?',
        options: [
          'Because it represents the minimum return required by capital providers',
          'Because it always equals the inflation rate',
          'Because it eliminates financing risk',
          'Because it guarantees project profitability',
        ],
        correctAnswer: 'Because it represents the minimum return required by capital providers',
        term: 'WACC',
        researchPapers: [
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Modigliani and Miller',
            year: '1958',
            summary: 'Foundational treatment of capital costs and investment evaluation.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
      {
        id: 'lesson-12',
        title: 'Cost of Debt',
        summary: 'The cost of debt reflects the return lenders require for providing financing and bearing default risk.',
        explanation: `
          The cost of debt is the effective interest rate a firm pays on borrowed funds after adjusting for tax effects where applicable. It is relatively straightforward to estimate from bond yields or interest rates, but it varies according to credit quality, maturity structure, and macroeconomic conditions.

          Debt is often less expensive than equity because creditors hold priority claims and are protected by contractual terms. The tax shield on interest payments further reduces the effective cost of debt. Nonetheless, leverage increases financial risk and may raise the cost of debt as default probability increases.

          Financial managers assess the cost of debt carefully because excessive leverage can destabilise the firm. A firm with an efficient debt structure may reduce WACC, but one with too much debt may become more fragile and vulnerable to refinancing risk.
        `,
        simpleExplanation: 'The cost of debt is the required return lenders demand for financing the business.',
        example: 'A firm with strong cash flows and low leverage may borrow at a lower rate than a firm with unstable earnings.',
        analogy: 'Debt is like borrowing from a lender who wants a reliable repayment promise in exchange for a lower required rate.',
        reflectionQuestion: 'Why is debt often cheaper than equity?',
        options: [
          'Because debt holders have priority claims and often benefit from tax shields',
          'Because debt is risk-free',
          'Because lenders always receive voting rights',
          'Because firms are never required to repay debt',
        ],
        correctAnswer: 'Because debt holders have priority claims and often benefit from tax shields',
        term: 'Cost of Debt',
        researchPapers: [
          {
            title: 'A Simple Positive Model of Capital Structure',
            authors: 'Miller',
            year: '1977',
            summary: 'Important work on the tax advantages of debt and capital structure trade-offs.',
            url: 'https://www.jstor.org/stable/2326484',
          },
        ],
      },
      {
        id: 'lesson-13',
        title: 'Cost of Equity',
        summary: 'The cost of equity is the return required by shareholders for bearing residual risk.',
        explanation: `
          Equity investors are residual claimants. They receive what remains after all obligations to creditors and other claimants have been met, which means their returns are more uncertain than debt holders’ returns. Consequently, the cost of equity is typically higher than the cost of debt.

          Estimating the cost of equity often uses the capital asset pricing model, which links required return to the asset’s systematic risk. The expected return is the risk-free rate plus a premium for bearing market risk. This framework explains why firms in more volatile sectors face higher equity costs and why market conditions matter for financing decisions.

          The cost of equity is critical because it anchors the valuation of shares and the benchmark for corporate investments. Firms must generate enough return to cover equity holders’ required returns to preserve value and support sustainable growth.
        `,
        simpleExplanation: 'The cost of equity is the return shareholders require for bearing residual risk.',
        example: 'A technology company with volatile cash flows may have a higher cost of equity than a regulated utility with stable revenues.',
        analogy: 'Equity is like a partner taking the last share of the upside but also absorbing the last loss.',
        reflectionQuestion: 'Why is the cost of equity generally higher than the cost of debt?',
        options: [
          'Because equity holders face greater residual risk and no fixed contractual claim',
          'Because debt is always more expensive',
          'Because equity is tax-deductible',
          'Because debt holders always receive ownership rights',
        ],
        correctAnswer: 'Because equity holders face greater residual risk and no fixed contractual claim',
        term: 'Cost of Equity',
        researchPapers: [
          {
            title: 'Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk',
            authors: 'Sharpe',
            year: '1964',
            summary: 'Classic CAPM derivation of the risk-return relationship.',
            url: 'https://www.jstor.org/stable/10.2307/2977928',
          },
        ],
      },
      {
        id: 'lesson-14',
        title: 'Financial Distress',
        summary: 'Financial distress occurs when the firm is unable to meet its obligations, creating costs that can destroy value.',
        explanation: `
          Financial distress is a state in which a firm struggles to satisfy its contractual obligations or maintain liquidity. It can arise from weak earnings, excessive leverage, poor cash management, or macroeconomic shocks. The consequences include lost business opportunities, renegotiated contracts, legal costs, and reduced investment capacity.

          Distress is not merely a consequence of poor performance; it is also shaped by capital structure and governance quality. High leverage magnifies downside risk, while weak operational controls may prevent the firm from adapting to adverse conditions. In severe cases, distress can culminate in insolvency or restructuring, with substantial losses for investors and stakeholders.

          This is why corporate finance emphasises prudent leverage, liquidity planning, and scenario analysis. The objective is not simply to maximise debt financing but to manage the trade-off between tax benefits and potential distress costs.
        `,
        simpleExplanation: 'Financial distress is the condition in which a company cannot meet its obligations without creating serious damage to value.',
        example: 'A highly leveraged retailer may be forced to sell assets or renegotiate terms during a recession if cash flows fall sharply.',
        analogy: 'Financial distress is like maintaining a house with a heavy mortgage during a sharp income shock: the burden becomes unsustainable.',
        reflectionQuestion: 'Why can excessive leverage reduce firm value?',
        options: [
          'Because it reduces the likelihood of distress',
          'Because it can increase the probability of financial distress and its associated costs',
          'Because it guarantees tax benefits without risk',
          'Because it prevents all shareholder losses',
        ],
        correctAnswer: 'Because it can increase the probability of financial distress and its associated costs',
        term: 'Financial Distress',
        researchPapers: [
          {
            title: 'Bankruptcy Costs and the Agency Costs of Debt',
            authors: 'Jensen and Meckling',
            year: '1976',
            summary: 'Shows how debt creates agency and distress costs that can reduce value.',
            url: 'https://www.jstor.org/stable/10.2307/2788528',
          },
        ],
      },
      {
        id: 'lesson-15',
        title: 'Optimal Capital Structure',
        summary: 'Optimal capital structure balances the tax advantages of debt against the increasing costs of financial distress.',
        explanation: `
          The theory of optimal capital structure posits that firms do not seek to maximise leverage indiscriminately. Instead, they choose a financing mix that balances the tax benefits of debt with the costs of distress, agency problems, and loss of flexibility. This trade-off is central to modern corporate finance.

          Historically, debt is attractive because interest lowers taxable income, but the more debt a firm carries, the more exposed it becomes to insolvency risk and the greater the likelihood of agency costs. As leverage rises, equity holders may demand a higher return and creditors may demand more protection. The result is a curved relationship between leverage and value.

          Firms therefore evaluate the marginal benefits and marginal costs of additional debt. The optimal point is reached where the incremental tax shield from another unit of debt is offset by the additional expected distress cost.
        `,
        simpleExplanation: 'The optimal capital structure is the point where the benefits of leverage are balanced against the costs of financial risk.',
        example: 'A firm may issue moderate debt to capture tax shields while maintaining enough liquidity to avoid distress during a downturn.',
        analogy: 'Optimal capital structure is like balancing a scale: too much weight on one side creates instability, and too little leaves value on the table.',
        reflectionQuestion: 'What is the central trade-off in the theory of optimal capital structure?',
        options: [
          'Tax benefits of debt versus distress and agency costs',
          'Higher dividends versus lower taxes only',
          'Debt repayment versus equity dilution always',
          'Operating leverage versus market efficiency',
        ],
        correctAnswer: 'Tax benefits of debt versus distress and agency costs',
        term: 'Optimal Capital Structure',
        researchPapers: [
          {
            title: 'A Simple Positive Model of Capital Structure',
            authors: 'Miller',
            year: '1977',
            summary: 'Framework for understanding how debt and equity balance tax and value effects.',
            url: 'https://www.jstor.org/stable/2326484',
          },
        ],
      },
    ],
  },
  {
    id: 'module-4',
    title: 'Module 4',
    subtitle: 'Valuation',
    description:
      'This module introduces valuation methods used to assess projects, equity, and firms. It links expected cash flows, discount rates, and risk to the price of assets and investment opportunities.',
    researchPapers: [
      {
        title: 'Does the Stock Market Overreact?',
        authors: 'De Bondt and Thaler',
        year: '1985',
        summary: 'Evidence on how prices may deviate from fundamental valuation under behavioural forces.',
        url: 'https://www.jstor.org/stable/2327804',
      },
    ],
    lessons: [
      {
        id: 'lesson-16',
        title: 'Discounted Cash Flow',
        summary: 'DCF valuation estimates value by discounting expected future cash flows to present value.',
        explanation: `
          Discounted cash flow (DCF) is a central valuation technique in corporate finance. It values an asset or project by computing the present value of expected future cash flows, using a discount rate aligned with the risk of those cash flows. The method integrates the time value of money, the cost of capital, and expected operating performance.

          In an investment context, DCF is used to estimate the net present value of a project. Asset value is estimated by forecasting future cash inflows and outflows, discounting them appropriately, and comparing the sum of present values to the initial cost. The method is especially useful when cash flows are predictable and linked to economic fundamentals.
        `,
        simpleExplanation: 'DCF values an asset by discounting expected future cash flows back to today.',
        example: 'A project offering annual cash inflows of £200,000 for five years may be valued by discounting each year’s cash flow at the firm’s required return.',
        analogy: 'DCF is like estimating the current worth of a future stream of payments by accounting for its delayed timing and risk.',
        reflectionQuestion: 'Why are future cash flows discounted in valuation?',
        options: [
          'Because future amounts are always smaller than current amounts',
          'Because money has time value and risk must be reflected in the discount rate',
          'Because inflation eliminates the need to compare amounts',
          'Because accounting profit is more important than cash flow',
        ],
        correctAnswer: 'Because money has time value and risk must be reflected in the discount rate',
        term: 'Discounted Cash Flow',
        researchPapers: [
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Modigliani and Miller',
            year: '1958',
            summary: 'Foundational basis for discounting and valuation under uncertainty.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
      {
        id: 'lesson-17',
        title: 'Net Present Value',
        summary: 'NPV measures the value added by a project by comparing present value of inflows with initial investment.',
        explanation: `
          Net present value (NPV) is perhaps the clearest decision criterion in investment appraisal. It subtracts the present value of costs from the present value of expected benefits. If NPV is positive, the project creates value; if it is negative, it destroys value under the selected assumptions.

          NPV integrates both timing and risk, making it a powerful tool for strategic capital allocation. It is more theoretically rigorous than simple payback or accounting-return metrics because it estimates economic value rather than short-term accounting performance.

          Limitations remain: forecasts may be inaccurate, discount rates may change, and strategic flexibility may be overlooked. Yet NPV remains the benchmark in rigorous corporate finance practice.
        `,
        simpleExplanation: 'NPV tells you whether a project adds value after considering the cost of capital.',
        example: 'If a project requires £500,000 today and is worth £560,000 in present value terms, its NPV is £60,000.',
        analogy: 'NPV is like calculating whether the future gains from an investment exceed the price paid today.',
        reflectionQuestion: 'What does a positive NPV imply?',
        options: [
          'The project is likely to destroy value',
          'The project is expected to add value after accounting for the cost of capital',
          'The project will always generate accounting profit',
          'The project is risk-free',
        ],
        correctAnswer: 'The project is expected to add value after accounting for the cost of capital',
        term: 'Net Present Value',
        researchPapers: [
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Modigliani and Miller',
            year: '1958',
            summary: 'Critical framework connecting investment decisions to value creation.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
      {
        id: 'lesson-18',
        title: 'Equity Valuation',
        summary: 'Equity value is the present value of expected future cash flows distributed to shareholders.',
        explanation: `
          Equity valuation estimates the intrinsic value of a company’s shares by discounting expected future residual cash flows to shareholders. This can be done using dividend discount models, free cash flow to equity approaches, or comparables. The goal is to determine whether market prices are fair relative to fundamentals.

          Ordinary equity is riskier than debt because shareholders are residual claimants. As a result, equity valuation must reflect both expected growth and risk. A firm with strong cash flows and durable competitive advantages can command a higher valuation, but if growth opportunities are weak or uncertainty is elevated, the equity discount rate and terminal value assumptions matter significantly.

          For firm managers, equity valuation is not purely academic; it influences fundraising, strategic transaction decisions, and market perception of value creation.
        `,
        simpleExplanation: 'Equity value is the present value of future returns available to shareholders after obligations are met.',
        example: 'A company with stable dividends may be valued using a dividend discount model, while a high-growth firm may be valued using free cash flow to equity or comparable multiples.',
        analogy: 'Equity valuation is like pricing a claim on the remaining profits after all other financial claims have been satisfied.',
        reflectionQuestion: 'Why does equity valuation require a higher discount rate than debt valuation?',
        options: [
          'Because equity claims are residual and therefore riskier',
          'Because debt holders always have greater upside',
          'Because dividend payouts are guaranteed',
          'Because equity is less liquid than debt',
        ],
        correctAnswer: 'Because equity claims are residual and therefore riskier',
        term: 'Equity Valuation',
        researchPapers: [
          {
            title: 'Discounted Cash Flow: A Theory of the Valuation of Firms',
            authors: 'Brealey and Myers',
            year: '1976',
            summary: 'Standard treatment of valuation and discounting in finance.',
            url: 'https://www.amazon.com/Principles-Corporate-Finance-Brealey-Myers/dp/0077861668',
          },
        ],
      },
      {
        id: 'lesson-19',
        title: 'Strategic Investment Decisions',
        summary: 'Investment decisions must balance value creation, strategic fit, and risk-adjusted return.',
        explanation: `
          Strategic investment decisions are not made solely on accounting returns. They require an analysis of expected cash flows, competitive positioning, execution risk, and capital intensity. Projects must be assessed relative to strategic objectives, timing, and capital constraints.

          Corporate finance frames these decisions around the expected net present value of future cash flows and the opportunity cost of capital. A project that looks attractive in isolation may destroy value if it requires capital that could be deployed elsewhere or if it increases the firm’s risk profile beyond tolerable levels.

          Consequently, finance and strategy are interdependent. Good strategic choices create sustainable competitive advantage, while weak investment discipline weakens value creation and undermines shareholder confidence.
        `,
        simpleExplanation: 'Strategic investment must create value not just growth, and it must be judged against the firm’s required return.',
        example: 'A firm may reject a high-revenue project if it requires too much capital, adds excessive risk, or generates lower risk-adjusted returns than alternatives.',
        analogy: 'Strategic investment is like choosing the right crop for a field, not simply the crop with the largest yield in one season.',
        reflectionQuestion: 'Why do strategic investment decisions require more than accounting profit analysis?',
        options: [
          'Because economic value depends on the risk-adjusted return and opportunity cost of capital',
          'Because market share automatically guarantees value',
          'Because accounting profit is irrelevant in all cases',
          'Because all strategic projects are risk-free',
        ],
        correctAnswer: 'Because economic value depends on the risk-adjusted return and opportunity cost of capital',
        term: 'Strategic Investment',
        researchPapers: [
          {
            title: 'The Relationship between Investment and Financing Decisions',
            authors: 'Brealey and Myers',
            year: '1984',
            summary: 'Broad finance treatment of strategic investment under uncertainty.',
            url: 'https://www.jstor.org/stable/2327667',
          },
        ],
      },
      {
        id: 'lesson-20',
        title: 'Market Signals and Capital Raising',
        summary: 'Financial markets interpret issuance decisions as signals about firm quality, expectations, and risk.',
        explanation: `
          Capital raising is not just a financing exercise; it is also a signal to the market. The choice of securities, timing, and issuance terms can communicate managerial beliefs about future performance and risk. Investors interpret these decisions in light of information asymmetry and governance quality.

          For instance, a firm issuing equity during a period of weak expectations may be perceived as signalling that the shares are overvalued, while debt issuance may signal confidence in stable cash flows. These signals can influence the market price of securities and the firm’s future cost of capital.

          Strategic financing therefore requires understanding how markets interpret signals and what information is being conveyed. Value creation depends not only on raising capital, but on doing so under terms that preserve confidence and align with the firm’s fundamentals.
        `,
        simpleExplanation: 'The way a firm raises capital can communicate important information to the market.',
        example: 'A company issuing equity during a downturn may be interpreted as a sign of limited internal opportunities or poor timing.',
        analogy: 'Capital raising is like sending a signal to investors about how confident the firm is in what it knows about the future.',
        reflectionQuestion: 'Why can financing choices be interpreted as signals?',
        options: [
          'Because investors infer information about risk and management expectations from issuance decisions',
          'Because markets always ignore financing decisions',
          'Because debt issuance is always less informative than equity',
          'Because all firms issue securities only to raise money',
        ],
        correctAnswer: 'Because investors infer information about risk and management expectations from issuance decisions',
        term: 'Market Signals',
        researchPapers: [
          {
            title: 'A Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure',
            authors: 'Jensen and Meckling',
            year: '1976',
            summary: 'Core source for understanding incentives and informational asymmetry in firms.',
            url: 'https://www.jstor.org/stable/10.2307/258011',
          },
        ],
      },
    ],
  },
  {
    id: 'module-5',
    title: 'Module 5',
    subtitle: 'Governance and Strategy',
    description:
      'This final module integrates the theory of corporate finance with governance, strategic control, and value-maximising decision-making under uncertainty.',
    researchPapers: [
      {
        title: 'Corporate Governance and the Board: An Overview',
        authors: 'Cadbury Report',
        year: '1992',
        summary: 'Landmark governance framework for accountability and board effectiveness.',
        url: 'https://www.ecgi.global/content/cadbury-report',
      },
      {
        title: 'Agency Costs of Free Cash Flow, Corporate Finance, and Takeovers',
        authors: 'Jensen',
        year: '1986',
        summary: 'Classic analysis of managerial incentives and the role of discipline in value creation.',
        url: 'https://www.jstor.org/stable/3890432',
      },
    ],
    lessons: [
      {
        id: 'lesson-21',
        title: 'Agency Costs',
        summary: 'Agency costs arise when managerial decisions diverge from the interests of shareholders and other claimants.',
        explanation: `
          Agency costs are incurred when managers pursue objectives that do not fully align with shareholder value maximisation. These may include overinvestment, quiet life behaviour, excessive perks, or strategic choices that protect managerial interests rather than create value. The costs can reduce both operating efficiency and market valuation.

          Corporate finance addresses agency problems through corporate governance, incentive contracts, board oversight, and market discipline. By aligning incentives, firms can reduce wastage and improve capital allocation decisions. Agency theory therefore links the structure of ownership, the board, and managerial incentives to financial performance and value creation.
        `,
        simpleExplanation: 'Agency costs are the losses created when managers act in ways that do not maximise owner value.',
        example: 'A manager might expand into unrelated businesses to build empire and prestige even if the returns are below the firm’s cost of capital.',
        analogy: 'Agency costs are like the waste that appears when a worker is not fully accountable to the owners of the business.',
        reflectionQuestion: 'Why do agency costs matter for value creation?',
        options: [
          'Because they represent value lost to poor managerial incentives',
          'Because they always increase tax liabilities',
          'Because they guarantee higher returns',
          'Because they reduce the need for capital budgeting',
        ],
        correctAnswer: 'Because they represent value lost to poor managerial incentives',
        term: 'Agency Costs',
        researchPapers: [
          {
            title: 'Agency Costs of Free Cash Flow, Corporate Finance, and Takeovers',
            authors: 'Jensen',
            year: '1986',
            summary: 'Core work on self-interested managerial behaviour and value destruction.',
            url: 'https://www.jstor.org/stable/3890432',
          },
        ],
      },
      {
        id: 'lesson-22',
        title: 'Board Oversight',
        summary: 'Effective boards monitor managers, shape strategy, and ensure accountability to shareholders and creditors.',
        explanation: `
          Board oversight is a central mechanism in modern governance. Boards are expected to review performance, challenge strategy, supervise risk management, and ensure that managerial incentives are aligned with long-term value creation. Effective boards provide independent challenge rather than passive endorsement of management decisions.

          In corporate finance, the board’s relevance goes beyond oversight. It influences capital allocation, financing choices, risk appetite, and strategic execution. Strong governance improves confidence among investors and can reduce the cost of capital, while weak governance can increase uncertainty and undermine investor trust.
        `,
        simpleExplanation: 'The board is responsible for holding management accountable and monitoring major strategic decisions.',
        example: 'A board may question an acquisition if the expected return is below the firm’s cost of capital or if the strategic rationale is weak.',
        analogy: 'Board oversight is like a steering committee ensuring the company stays on the correct course.',
        reflectionQuestion: 'What is the role of board oversight in finance?',
        options: [
          'To guarantee immediate profitability',
          'To monitor management and reduce agency problems',
          'To replace all market-based discipline',
          'To eliminate all financing risk',
        ],
        correctAnswer: 'To monitor management and reduce agency problems',
        term: 'Board Oversight',
        researchPapers: [
          {
            title: 'Cadbury Report',
            authors: 'Cadbury Committee',
            year: '1992',
            summary: 'Foundational governance report on the role and scope of board accountability.',
            url: 'https://www.ecgi.global/content/cadbury-report',
          },
        ],
      },
      {
        id: 'lesson-23',
        title: 'Strategic Risk',
        summary: 'Strategic risk reflects the uncertainty surrounding management decisions, competitive positioning, and execution quality.',
        explanation: `
          Strategic risk is the risk that the firm’s choices about market position, expansion, innovation, and execution fail to generate expected returns. Unlike purely financial risk, strategic risk is linked to business model quality, competition, regulation, and managerial judgment.

          In corporate finance, strategic risk matters because it affects operating cash flows, the firm’s expected growth, and the discount rate applied to those cash flows. A company may be well financed but still destroy value if it enters markets in which competitive advantages are weak or if management misjudges execution risk.

          Consequently, firms need disciplined strategic planning, scenario analysis, and robust capital allocation frameworks. Financial discipline must ultimately support strategic quality rather than merely preserve balance-sheet stability.
        `,
        simpleExplanation: 'Strategic risk captures the possibility that a chosen strategy fails to create expected value.',
        example: 'A firm entering a crowded market may fail to earn returns above its cost of capital despite high reported revenue growth.',
        analogy: 'Strategic risk is like choosing a path across rough terrain without knowing whether the route is sustainable.',
        reflectionQuestion: 'Why is strategic risk relevant to corporate finance?',
        options: [
          'Because it affects the cash flows and value that investments generate',
          'Because it replaces the need for capital budgeting',
          'Because it guarantees stronger growth',
          'Because it lowers the firm’s cost of debt permanently',
        ],
        correctAnswer: 'Because it affects the cash flows and value that investments generate',
        term: 'Strategic Risk',
        researchPapers: [
          {
            title: 'Competitive Strategy',
            authors: 'Porter',
            year: '1980',
            summary: 'Classic strategic framework for understanding competitive advantage and risk.',
            url: 'https://www.isc.hbs.edu/strategy/strategy-bibliography.html',
          },
        ],
      },
      {
        id: 'lesson-24',
        title: 'Value Maximisation',
        summary: 'The objective of corporate finance is to maximise long-term value for owners by allocating capital efficiently and managing risk carefully.',
        explanation: `
          Value maximisation is the central objective of corporate finance. It requires firms to allocate capital to opportunities that generate returns above required rates of return, manage risk prudently, and maintain financial flexibility. This objective not only guides investment but also informs financing, governance, and strategic choices.

          Value maximisation is not simply a slogan; it is the framework through which firms assess trade-offs between growth, risk, liquidity, and long-term sustainability. It distinguishes between projects that improve shareholder wealth and those that satisfy managerial preferences without generating economic surplus.
        `,
        simpleExplanation: 'The firm should pursue actions that increase long-term economic value rather than short-term appearances.',
        example: 'A company may reject expansion into a low-margin market if it generates weak returns relative to capital costs and risk.',
        analogy: 'Value maximisation is like choosing the investment that yields the best net gain, not simply the one that looks most impressive on paper.',
        reflectionQuestion: 'What is the objective of value maximisation?',
        options: [
          'To increase the long-term economic value of the firm for owners',
          'To maximise accounting earnings at all costs',
          'To reduce market competition permanently',
          'To avoid all risk in every strategy',
        ],
        correctAnswer: 'To increase the long-term economic value of the firm for owners',
        term: 'Value Maximisation',
        researchPapers: [
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Modigliani and Miller',
            year: '1958',
            summary: 'Foundational model linking financing and investment to value creation.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
      {
        id: 'lesson-25',
        title: 'Finance for Long-Term Stewardship',
        summary: 'Excellent corporate finance combines disciplined investment, governance, and stewardship to create resilient value over time.',
        explanation: `
          The most successful firms understand that financial policy is not a one-off exercise but a continuous discipline of stewardship. Finance must balance investment, risk, governance, and market expectations to preserve long-term value. This requires robust capital allocation, transparent disclosure, and good governance as well as a realistic assessment of uncertainty.

          Long-term stewardship means building a firm that can survive shocks, adapt to change, and continue to create value for shareholders and stakeholders. It is this combination of discipline, governance, and strategic foresight that distinguishes sound corporate finance from short-term opportunism.
        `,
        simpleExplanation: 'Corporate finance is a long-term discipline of disciplined capital allocation, governance, and risk management.',
        example: 'A firm with strong governance and prudent capital allocation is better placed to withstand shocks and generate sustained value.',
        analogy: 'Finance for stewardship is like maintaining a long-lived institution: it requires foresight, discipline, and resilience rather than short-term gain.',
        reflectionQuestion: 'Why is long-term stewardship central to corporate finance?',
        options: [
          'Because sustainable value creation depends on disciplined capital allocation and governance',
          'Because accounting earnings always represent long-term value',
          'Because market prices are fixed regardless of strategy',
          'Because financial management is separate from strategy and governance',
        ],
        correctAnswer: 'Because sustainable value creation depends on disciplined capital allocation and governance',
        term: 'Stewardship',
        researchPapers: [
          {
            title: 'Corporate Governance and the Board: An Overview',
            authors: 'Cadbury Report',
            year: '1992',
            summary: 'Important governance framework for long-term stakeholder stewardship.',
            url: 'https://www.ecgi.global/content/cadbury-report',
          },
        ],
      },
    ],
  },
];

export const getModuleById = (id: string) => modules.find((module) => module.id === id);
export const getLessonById = (moduleId: string, lessonId: string) => {
  const module = getModuleById(moduleId);
  return module?.lessons.find((lesson) => lesson.id === lessonId);
};

