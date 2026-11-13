import type { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'module-1',
    title: 'Module 1',
    subtitle: 'Risk, Return and Capital Markets',
    description:
      'This module examines the theoretical basis of risk and return, the pricing of uncertainty, and the role of capital markets in allocating scarce financial resources. It frames investment and financing decisions through the lens of risk-adjusted returns, market efficiency, and value creation.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Risk and Return',
        summary: 'Expected return reflects the compensation required for bearing uncertainty.',
        explanation: `
          Corporate finance begins with the principle that risk and return are inseparable. Investors do not evaluate projects solely by nominal return; they evaluate expected returns relative to the uncertainty attached to those returns. Firms therefore cannot ignore risk when selecting investment opportunities, because risk determines the return required by capital providers.

          Systematic risk is particularly important because it cannot be diversified away. It is the component priced by capital markets and reflected in the cost of equity. By contrast, diversifiable risk may be reduced through portfolio diversification, which is why it is not typically rewarded with a higher required return in equilibrium. The implication is clear: project evaluation must be anchored in risk-adjusted return, not raw accounting profit.

          In practical terms, financial managers use the cost of capital as the hurdle rate for strategic investment. A project creates economic value only when its expected return exceeds the required return consistent with its risk profile. This is the logic that connects corporate strategy, valuation, and capital allocation.
        `,
        simpleExplanation: 'The greater the uncertainty, the higher the return investors normally require.',
        example: 'A venture capital investment may offer a very high expected return because its cash flows are highly uncertain and volatile.',
        analogy: 'Risk is like a mountain trail: the steeper and less stable the route, the greater the premium expected for taking it.',
        reflectionQuestion: 'Why is expected return higher when the underlying investment is riskier?',
        options: [
          'Because investors require compensation for uncertainty',
          'Because regulators force firms to pay more on risky projects',
          'Because accounting profit always rises with risk',
          'Because debt is automatically more risky than equity',
        ],
        correctAnswer: 'Because investors require compensation for uncertainty',
        term: 'Risk and Return',
        researchPapers: [
          {
            title: 'Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk',
            authors: 'William F. Sharpe',
            year: '1964',
            summary: 'Introduces the relationship between systematic risk and expected return in equilibrium.',
            url: 'https://www.jstor.org/stable/10.2307/2977928',
          },
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Franco Modigliani and Merton H. Miller',
            year: '1958',
            summary: 'Foundational framework for linking investment decisions, financing, and required returns.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
      {
        id: 'lesson-2',
        title: 'Time Value of Money',
        summary: 'A pound today is worth more than a pound tomorrow because it can earn a return now.',
        explanation: `
          The time value of money is one of the most fundamental concepts in finance. It states that money available now is worth more than the same nominal amount in the future because present money can be invested and earn returns. This principle is embedded in both valuation and capital budgeting.

          Discounting and compounding are the two key tools. Discounting converts future cash flows into present value, while compounding measures how a current amount grows over time. These tools allow firms to compare investment alternatives over different time horizons and to determine whether expected cash inflows justify current capital outlays.

          This concept is central to debt pricing, equity valuation, project appraisal, and strategic investment. Without it, firms would struggle to measure the economic value of future returns or the real cost of financing.
        `,
        simpleExplanation: 'Money now is worth more than the same money later because it can earn interest or produce returns.',
        example: 'Receiving £10,000 today is more valuable than receiving £10,000 in three years because the present sum can be invested immediately.',
        analogy: 'A pound now is a seed already in the ground; a pound later is still waiting to be planted.',
        reflectionQuestion: 'Why are future cash flows discounted before they are compared to current costs?',
        options: [
          'Because money has an opportunity cost and time value',
          'Because future cash flows are always smaller',
          'Because debt is always less risky than equity',
          'Because stock prices are unaffected by timing',
        ],
        correctAnswer: 'Because money has an opportunity cost and time value',
        term: 'Time Value of Money',
        researchPapers: [
          {
            title: 'The Theory of Interest',
            authors: 'Irving Fisher',
            year: '1930',
            summary: 'Classic analysis of intertemporal choice and the role of interest in economic value.',
            url: 'https://archive.org/details/theoryofinterest00fish',
          },
        ],
      },
      {
        id: 'lesson-3',
        title: 'Value Creation',
        summary: 'A firm creates value when investment returns exceed the required return on capital.',
        explanation: `
          Value creation is the core objective of corporate finance. A company creates wealth when it invests capital in projects that generate returns higher than the return required by its providers of capital. Put differently, value is created when economic return exceeds the opportunity cost of capital.

          This principle underlies discounted cash flow analysis and net present value rules. A project is attractive if the present value of its future cash flows exceeds the upfront investment after adjusting for the relevant cost of capital. This is why capital budgeting is not simply about growth or accounting earnings; it is fundamentally about economic surplus.

          Value creation therefore sits at the intersection of investment strategy, financing decisions, and governance. The proper objective is not volume or market share alone, but sustainable value generation after the cost of capital has been taken into account.
        `,
        simpleExplanation: 'A project creates value when it earns more than the minimum return required by investors.',
        example: 'If a project costs £2 million and has a present value of £2.4 million, it creates £0.4 million of value.',
        analogy: 'Value creation is like earning a return above the price of borrowing the capital used to produce it.',
        reflectionQuestion: 'When does a project create shareholder value?',
        options: [
          'When the project earns more than the cost of capital',
          'When it increases revenue regardless of profitability',
          'When it reduces debt immediately',
          'When it avoids risk entirely',
        ],
        correctAnswer: 'When the project earns more than the cost of capital',
        term: 'Value Creation',
        researchPapers: [
          {
            title: 'A Theory of the Firm',
            authors: 'Ronald Coase',
            year: '1937',
            summary: 'Classic economic foundation for understanding the firm and efficient resource allocation.',
            url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-0335.1937.tb00002.x',
          },
        ],
      },
      {
        id: 'lesson-4',
        title: 'Market Efficiency',
        summary: 'Capital markets process information, but prices are not always perfectly or immediately efficient.',
        explanation: `
          The efficient markets hypothesis suggests that prices reflect available information to a substantial degree. Under this view, it is difficult for investors to earn persistent abnormal returns without taking additional risk or possessing superior information. This matters because corporate financing decisions are influenced by market prices and investor expectations.

          Efficiency does not mean perfection. Markets can deviate from fundamental value because of behavioural biases, liquidity constraints, asymmetric information, and macroeconomic shocks. Even so, the important implication is that prices are informative and that arbitrage opportunities tend to be transient when competition is strong.

          For firms, this means that capital raising, valuation, and strategic communication are all shaped by how the market interprets information. A well-governed and well-informed firm can often secure financing on more favourable terms than one with uncertain disclosure.
        `,
        simpleExplanation: 'Stock prices usually reflect information, but they are not always perfectly accurate in real time.',
        example: 'When a company announces a high-value acquisition, the share price adjusts quickly as investors revise expected cash flows and risk.',
        analogy: 'Markets are like a large and informed crowd, though the crowd may sometimes overreact before the complete story is known.',
        reflectionQuestion: 'Why does market efficiency matter for corporate finance?',
        options: [
          'Because it shapes how quickly prices reflect information and affect financing cost',
          'Because it guarantees all prices are fair at all times',
          'Because it eliminates business risk',
          'Because it cancels the need for governance',
        ],
        correctAnswer: 'Because it shapes how quickly prices reflect information and affect financing cost',
        term: 'Market Efficiency',
        researchPapers: [
          {
            title: 'The Efficient Capital Market: A Review of Theory and Empirical Work',
            authors: 'Eugene F. Fama',
            year: '1970',
            summary: 'Seminal review of the efficient market hypothesis and empirical evidence.',
            url: 'https://www.jstor.org/stable/2325486',
          },
        ],
      },
      {
        id: 'lesson-5',
        title: 'Information Asymmetry',
        summary: 'Managers often know more than outside investors, creating frictions in capital markets.',
        explanation: `
          Information asymmetry occurs when one party has more information than another. In corporate finance, managers and insiders typically know more about the firm’s quality, prospects, and risk than outside investors. This creates adverse selection and moral hazard problems in capital markets.

          The result is that markets may discount securities, raise the cost of capital, or demand more disclosure. In severe cases, information asymmetry can deter financing or force firms to adjust issuance terms. This is why corporate disclosure, auditing, and governance are central to financing decisions.

          The concept also links directly to agency theory: where management and ownership are separated, the risk that managers act in their own interest rather than in the interests of investors becomes more significant when information is uneven.
        `,
        simpleExplanation: 'When managers know more than investors, financing becomes less certain and often more expensive.',
        example: 'A company may need to disclose material information carefully because poor disclosure can lead investors to discount the equity value.',
        analogy: 'Information asymmetry is like a transaction in which one party knows the quality of the product while the other is guessing.',
        reflectionQuestion: 'Why does information asymmetry matter in capital markets?',
        options: [
          'Because it creates uncertainty that can affect the cost and availability of finance',
          'Because it eliminates the need for financial reporting',
          'Because it guarantees that all securities are fairly priced',
          'Because it removes governance concerns',
        ],
        correctAnswer: 'Because it creates uncertainty that can affect the cost and availability of finance',
        term: 'Information Asymmetry',
        researchPapers: [
          {
            title: 'The Market for “Lemons”: Quality Uncertainty and the Market Mechanism',
            authors: 'George A. Akerlof',
            year: '1970',
            summary: 'Classic analysis of how information asymmetry distorts market outcomes.',
            url: 'https://www.jstor.org/stable/1879431',
          },
        ],
      },
    ],
  },
  {
    id: 'module-2',
    title: 'Module 2',
    subtitle: 'Equity, Preference Shares and Capital Structure',
    description:
      'This module analyses how firms choose between different claims on value: ordinary equity, preference shares, debt, and hybrid capital. It explains the trade-offs between ownership dilution, control rights, fixed claims, and the tax and risk consequences of leverage.',
    lessons: [
      {
        id: 'lesson-6',
        title: 'Ordinary Equity',
        summary: 'Ordinary shareholders are residual claimants and typically have voting rights.',
        explanation: `
          Ordinary equity represents the most direct form of ownership in a corporation. Shareholders receive dividends only after all other claims have been met, and they bear the greatest residual risk. In exchange, they hold the potential for unlimited upside through capital appreciation and participation in firm growth.

          Ordinary equity is also the main source of voting power in many corporations. Shareholders can influence board elections and major strategic decisions, which gives them governance rights but also exposes the firm to market scrutiny and pressure for short-term performance.

          Because ordinary equity is a residual claim, it is the most expensive form of capital in a typical corporate structure. Investors require a higher return for bearing this uncertainty, which is why cost of equity is often above the cost of debt.
        `,
        simpleExplanation: 'Ordinary equity carries more uncertainty but also the greatest share of upside and governance control.',
        example: 'A growth business may issue ordinary shares to attract equity investors who want to participate in long-term capital gains.',
        analogy: 'Ordinary shares are like partnership claims with full upside and full residual risk.',
        reflectionQuestion: 'Why is ordinary equity usually more expensive than debt?',
        options: [
          'Because shareholders are residual claimants and bear more risk',
          'Because debt always has higher returns',
          'Because dividends are always fixed',
          'Because voting rights create no financial cost',
        ],
        correctAnswer: 'Because shareholders are residual claimants and bear more risk',
        term: 'Ordinary Equity',
        researchPapers: [
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Franco Modigliani and Merton H. Miller',
            year: '1958',
            summary: 'Core treatment of financing claims and the premium demanded by equity investors.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
      {
        id: 'lesson-7',
        title: 'Preference Shares',
        summary: 'Preference shares are hybrid claims with priority over ordinary shareholders but usually no voting rights.',
        explanation: `
          Preference shares occupy a middle ground between debt and ordinary equity. They usually carry a fixed dividend rate and are often senior to ordinary shares in the payment of dividends and the distribution of proceeds in liquidation. However, they typically sit below debt holders in priority and usually lack voting rights.

          This makes preference shares attractive to firms that want to access capital without diluting control to the same extent as ordinary equity. They also appeal to investors seeking a more stable cash-flow profile than ordinary shares, but with less priority than debt holders.

          In capital structure terms, preference shares are often viewed as a hybrid instrument: they offer enhanced income certainty relative to ordinary shares but still expose the firm to fixed dividend commitments and a more complex financing structure.
        `,
        simpleExplanation: 'Preference shares usually offer fixed dividends and priority over ordinary shareholders, but less upside and usually no voting rights.',
        example: 'A mature company may issue preference shares instead of additional ordinary equity to raise capital without diluting control.',
        analogy: 'Preference shares are like a senior claim that pays a fixed coupon but does not carry full ownership control.',
        reflectionQuestion: 'What is the main difference between ordinary shares and preference shares?',
        options: [
          'Preference shares normally carry fixed dividends and priority over ordinary shares',
          'Ordinary shares are always less risky',
          'Preference shares always have voting rights',
          'Ordinary shares are debt instruments',
        ],
        correctAnswer: 'Preference shares normally carry fixed dividends and priority over ordinary shares',
        term: 'Preference Shares',
        researchPapers: [
          {
            title: 'Bankruptcy Costs and the Agency Costs of Debt',
            authors: 'Michael C. Jensen and William H. Meckling',
            year: '1976',
            summary: 'Explains how financing claims shape the trade-offs between equity, debt, and hybrid securities.',
            url: 'https://www.jstor.org/stable/10.2307/2788528',
          },
        ],
      },
      {
        id: 'lesson-8',
        title: 'Capital Structure',
        summary: 'Capital structure is the mix of debt, equity, and hybrid capital a firm uses to finance assets.',
        explanation: `
          Capital structure is not merely a financing detail; it is one of the core strategic decisions in corporate finance. Firms choose among debt, ordinary equity, preference shares, and internally generated funds when allocating financing. Each source has different cost, risk, control, and flexibility consequences.

          Debt is often cheaper because interest is tax-deductible and creditors enjoy priority claims. However, higher leverage increases the probability of financial distress and can constrain flexibility. Equity is more expensive but less risky from the firm’s viewpoint and does not create mandatory repayment obligations. Preference shares sit between these extremes, offering some of the benefits of fixed claims without the full contractual severity of debt.

          The objective is to find the capital mix that minimises the weighted average cost of capital without creating unacceptable financial distress. This is the foundation of optimal capital structure theory.
        `,
        simpleExplanation: 'Capital structure is the combination of debt, equity, and hybrid securities used to finance the firm.',
        example: 'A business may issue debt for tax advantages but issue equity if it wants to avoid over-leveraging and preserve flexibility.',
        analogy: 'Capital structure is like the design of a bridge: different materials have different strengths, costs, and failure risks.',
        reflectionQuestion: 'Why is capital structure strategically important?',
        options: [
          'Because financing choices affect the cost of capital, risk, and firm value',
          'Because debt always lowers risk',
          'Because equity never has control implications',
          'Because decline in leverage always increases value',
        ],
        correctAnswer: 'Because financing choices affect the cost of capital, risk, and firm value',
        term: 'Capital Structure',
        researchPapers: [
          {
            title: 'Determinants of Capital Structure',
            authors: 'Sheridan Titman and Roberto Wessels',
            year: '1988',
            summary: 'Empirical analysis of why firms choose different financing mixes.',
            url: 'https://www.jstor.org/stable/2771307',
          },
        ],
      },
      {
        id: 'lesson-9',
        title: 'Agency Theory and Leverage',
        summary: 'Leverage can create value but also magnify agency problems and financial distress.',
        explanation: `
          Agency theory explains why the interests of managers and owners may diverge. Managers may prefer growth, empire-building, or lower operational discipline if those actions increase personal prestige or reduce risk to themselves. Shareholders, however, want value creation and efficient capital allocation.

          Leverage disciplines managers by creating fixed obligations, which can reduce free cash flow and limit value-destroying expansion. But leverage also increases the cost of failure: if cash flows are weak, debt magnifies losses and raises the likelihood of distress. The same instrument that disciplines management can also intensify agency and bankruptcy costs.

          For this reason, the optimal use of leverage requires balancing the benefits of discipline and tax shields against the risk of financial distress and managerial misalignment.
        `,
        simpleExplanation: 'Debt can improve discipline but can also create distress and agency costs when leverage is excessive.',
        example: 'A highly levered firm may perform well in good times but struggle sharply in a downturn if cash flows fall below debt service requirements.',
        analogy: 'Leverage is like using a strong lever to move a heavy object: it can create movement, but a bad angle can tip the whole structure.',
        reflectionQuestion: 'How can leverage create both discipline and risk?',
        options: [
          'By encouraging efficiency while also magnifying losses during poor performance',
          'By guaranteeing tax benefits without downside',
          'By eliminating all agency conflicts',
          'By reducing the requirement for monitoring',
        ],
        correctAnswer: 'By encouraging efficiency while also magnifying losses during poor performance',
        term: 'Agency Theory and Leverage',
        researchPapers: [
          {
            title: 'Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure',
            authors: 'Michael C. Jensen and William H. Meckling',
            year: '1976',
            summary: 'Foundational analysis of agency conflicts and the separation of ownership and control.',
            url: 'https://www.jstor.org/stable/10.2307/258011',
          },
        ],
      },
      {
        id: 'lesson-10',
        title: 'Dividend Policy',
        summary: 'Dividend policy determines whether the firm distributes profits or retains earnings for reinvestment.',
        explanation: `
          Dividend policy remains one of the most debated areas of corporate finance. Firms must decide how much cash to distribute to shareholders and how much to retain for investment. Retaining earnings can fund new projects, but dividend payments may signal confidence and satisfy investor demand for income.

          In frictionless markets, dividend policy may not affect value, but in real markets it matters because of taxes, investor preferences, signalling, and agency concerns. Stable dividends can reduce uncertainty and build credibility, while cuts in payout may signal deterioration in expected performance.

          The correct policy reflects the firm’s growth opportunities, capital needs, and investor profile. Mature firms with lower reinvestment opportunities often distribute more cash; growth firms often retain more to finance expansion.
        `,
        simpleExplanation: 'Dividend policy is about balancing cash payouts to shareholders against investments for the future.',
        example: 'A mature utility company may pay stable dividends, while a new technology company often reinvests cash to fund growth.',
        analogy: 'Dividend policy is like deciding whether to harvest returns now or reinvest them to grow the orchard.',
        reflectionQuestion: 'Why might firms retain earnings rather than pay them out as dividends?',
        options: [
          'To fund future value-creating investment opportunities',
          'Because all retained earnings are always tax-free',
          'Because dividends are never relevant to shareholders',
          'Because market prices ignore dividend policy',
        ],
        correctAnswer: 'To fund future value-creating investment opportunities',
        term: 'Dividend Policy',
        researchPapers: [
          {
            title: 'Dividend Policy, Growth, and the Valuation of Shares',
            authors: 'James E. Walter',
            year: '1963',
            summary: 'Early theory linking dividend policy, growth, and share valuation.',
            url: 'https://www.jstor.org/stable/2329986',
          },
        ],
      },
    ],
  },
  {
    id: 'module-3',
    title: 'Module 3',
    subtitle: 'Cost of Capital and Valuation',
    description:
      'This module introduces the cost of capital and valuation frameworks used to estimate whether investments and securities are economically attractive and fairly priced.',
    lessons: [
      {
        id: 'lesson-11',
        title: 'Cost of Debt',
        summary: 'The cost of debt reflects the return lenders require for providing finance and bearing default risk.',
        explanation: `
          The cost of debt is the effective rate paid by a firm on its borrowings, adjusted for any tax shield associated with interest payments. Debt is often cheaper than equity because lenders have priority claims and because interest is typically tax-deductible. However, debt also creates financial obligations that can increase distress risk.

          The cost of debt is influenced by credit quality, maturity structure, current interest rates, and the broader macroeconomic environment. A firm with stronger cash flows and lower leverage can often borrow at lower rates than a less stable business. As leverage rises, debt investors may demand a higher rate to compensate for greater default risk.

          This concept is crucial because the cost of debt is embedded in the firm’s overall cost of capital and therefore in investment appraisal.
        `,
        simpleExplanation: 'The cost of debt is the return lenders require for providing finance to the business.',
        example: 'A highly rated company may borrow at a lower cost than a firm with weaker cash flows and higher business risk.',
        analogy: 'Debt is like borrowing from a lender who demands a price for the risk of not being repaid on time.',
        reflectionQuestion: 'Why is debt often cheaper than equity?',
        options: [
          'Because debt holders have priority claims and interest is often tax deductible',
          'Because debt holders never bear risk',
          'Because debt issues always include voting rights',
          'Because debt always has no maturity',
        ],
        correctAnswer: 'Because debt holders have priority claims and interest is often tax deductible',
        term: 'Cost of Debt',
        researchPapers: [
          {
            title: 'A Simple Positive Model of Capital Structure',
            authors: 'Merton H. Miller',
            year: '1977',
            summary: 'Important work on debt tax shields and the trade-offs in capital structure.',
            url: 'https://www.jstor.org/stable/2326484',
          },
        ],
      },
      {
        id: 'lesson-12',
        title: 'Cost of Equity',
        summary: 'The cost of equity is the return required by shareholders for bearing residual risk.',
        explanation: `
          Equity is more complex than debt because shareholders stand last in the capital structure and therefore bear the greatest residual risk. They receive returns only after creditors and other claimants have been paid, which makes equity riskier and therefore more expensive.

          One standard way to estimate the cost of equity is the capital asset pricing model, which links required return to systematic risk. The model states that the expected return on a security equals the risk-free rate plus a market risk premium scaled by the asset’s beta. This provides a disciplined way to estimate the return required by equity investors.

          In valuation, the cost of equity is central because it determines the required return on shareholders’ capital and therefore affects the value placed on equity claims.
        `,
        simpleExplanation: 'The cost of equity is the return demanded by shareholders for bearing residual risk.',
        example: 'A high-beta technology company typically has a higher cost of equity than a utility with steadier cash flows.',
        analogy: 'Equity is like a partnership claim: the upside is greater, but the risk of loss is also larger than for debt holders.',
        reflectionQuestion: 'Why is the cost of equity normally above the cost of debt?',
        options: [
          'Because equity holders are residual claimants and bear more risk',
          'Because equity is always tax free',
          'Because equity holders have fixed cash flows',
          'Because debt holders do not require return',
        ],
        correctAnswer: 'Because equity holders are residual claimants and bear more risk',
        term: 'Cost of Equity',
        researchPapers: [
          {
            title: 'Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk',
            authors: 'William F. Sharpe',
            year: '1964',
            summary: 'Formalises the risk-return relationship for equity pricing under equilibrium conditions.',
            url: 'https://www.jstor.org/stable/10.2307/2977928',
          },
        ],
      },
      {
        id: 'lesson-13',
        title: 'Weighted Average Cost of Capital',
        summary: 'WACC blends the costs of debt and equity in proportion to their capital weights.',
        explanation: `
          The weighted average cost of capital (WACC) is the companywide benchmark used for evaluating projects and strategic investments. It combines the required returns on debt and equity according to their relative proportions in the firm’s financing mix. A firm’s WACC is therefore a function of both capital structure and market conditions.

          WACC is particularly important because it provides the discount rate used in discounted cash flow analysis. If a project’s expected return is above the WACC, it is likely to create value. If it falls below, it can destroy value even if accounting profits appear positive.

          In practice, WACC changes with leverage, required rates of return, tax environment, and macroeconomic conditions. That is why finance is not simply an accounting discipline; it is a dynamic analysis of risk and capital market pricing.
        `,
        simpleExplanation: 'WACC is the blended return required by the firm’s debt and equity investors.',
        example: 'A company with 60% equity at 12% and 40% debt at 5% might have a WACC materially below the cost of equity but above the cost of debt.',
        analogy: 'WACC is like the average price a firm must pay to all of its capital providers for using their funds.',
        reflectionQuestion: 'Why is WACC often used as the discount rate in project valuation?',
        options: [
          'Because it reflects the required return of the firm’s capital providers',
          'Because it is always constant for all firms',
          'Because it ignores financing structure',
          'Because it guarantees project success',
        ],
        correctAnswer: 'Because it reflects the required return of the firm’s capital providers',
        term: 'WACC',
        researchPapers: [
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Franco Modigliani and Merton H. Miller',
            year: '1958',
            summary: 'Foundational treatment of cost of capital and firm valuation.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
      {
        id: 'lesson-14',
        title: 'Discounted Cash Flow Valuation',
        summary: 'DCF valuation estimates a business or project by discounting expected future cash flows to present value.',
        explanation: `
          Discounted cash flow (DCF) is a core valuation method in corporate finance. It values an asset by forecasting the future cash flows it is expected to generate and then discounting those cash flows to the present using a rate appropriate to the risk of those cash flows.

          This approach is especially useful where cash flows are predictable and linked to underlying operating performance. It connects directly to the time value of money and the cost of capital, thereby making valuation an explicit synthesis of financial theory and business strategy.

          The key challenge is not only the arithmetic but also the assumptions. Forecast quality, terminal value, discount rate selection, and macroeconomic conditions materially affect the estimate.
        `,
        simpleExplanation: 'DCF values an investment by discounting future cash flows back to today using the appropriate required return.',
        example: 'A project generating £200,000 annually for five years may be valued by discounting each year’s cash flow at the project’s required return.',
        analogy: 'DCF is like translating a stream of future income into today’s money by accounting for timing and risk.',
        reflectionQuestion: 'Why are expected future cash flows discounted when valuing a project?',
        options: [
          'Because money received later is worth less than money received now',
          'Because accounting profit is always more relevant than cash flow',
          'Because risk never matters in valuation',
          'Because debt financing eliminates time value',
        ],
        correctAnswer: 'Because money received later is worth less than money received now',
        term: 'Discounted Cash Flow',
        researchPapers: [
          {
            title: 'The Theory of Investment Value',
            authors: 'John Burr Williams',
            year: '1938',
            summary: 'Foundation text on discounting future cash flows to determine intrinsic value.',
            url: 'https://archive.org/details/in.ernet.dli.2015.216200',
          },
        ],
      },
      {
        id: 'lesson-15',
        title: 'Net Present Value',
        summary: 'NPV measures the value created by a project after accounting for the cost of capital.',
        explanation: `
          Net present value (NPV) is the most direct and theoretically coherent investment appraisal rule. It compares the present value of future inflows with the upfront cost of investment. When NPV is positive, the project is expected to create economic value; when it is negative, it is expected to destroy value under the chosen assumptions.

          The central insight is that value is created only if returns exceed the opportunity cost of capital. This is why NPV integrates both profitability and the risk-adjusted hurdle rate. It remains the benchmark test for capital budgeting in theory and practice.

          However, firms must still assess realism, risk sensitivity, and strategic flexibility, because NPV depends on forecast assumptions and market conditions.
        `,
        simpleExplanation: 'NPV tells you whether a project adds value after considering the cost of capital.',
        example: 'If a project costs £500,000 today and is worth £560,000 in present value terms, the NPV is £60,000.',
        analogy: 'NPV is like comparing the total value of future gains with the initial price paid today.',
        reflectionQuestion: 'What does a positive NPV indicate?',
        options: [
          'The project is expected to increase economic value',
          'The project must always be accepted regardless of strategy',
          'The project has zero operating risk',
          'The project reduces the firm’s cost of debt',
        ],
        correctAnswer: 'The project is expected to increase economic value',
        term: 'Net Present Value',
        researchPapers: [
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Franco Modigliani and Merton H. Miller',
            year: '1958',
            summary: 'Core foundation for linking valuation and investment decision rules to economic value.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
    ],
  },
  {
    id: 'module-4',
    title: 'Module 4',
    subtitle: 'Corporate Governance and Agency Theory',
    description:
      'This module explores how governance, incentives, and ownership structure affect managerial behaviour, strategic investing, and long-run firm value. It studies the agency problem and how governance mechanisms reduce value-destroying behaviour.',
    lessons: [
      {
        id: 'lesson-16',
        title: 'Agency Theory',
        summary: 'Agency theory examines conflicts between managers and owners when decision rights are separated from ownership.',
        explanation: `
          Agency theory addresses a core challenge of modern corporations: managers and shareholders may not have identical objectives. Managers may prefer empire-building, lower risk, or personal prestige, while shareholders focus on long-term value maximisation. This divergence creates agency costs.

          These costs arise when managerial behaviour is not disciplined by properly aligned incentives or effective oversight. They can reduce profitability, distort capital allocation, and weaken investor trust. Governance mechanisms such as board oversight, executive incentives, audits, and market discipline are designed to align managerial behaviour with shareholder interests.
        `,
        simpleExplanation: 'Agency theory explains why managers and owners may not always act in the same way.',
        example: 'A manager may approve an acquisition with weak returns to increase prestige, even if it destroys shareholder value.',
        analogy: 'Agency costs are like the lost value that appears when an agent is not fully accountable to the owner of the resource.',
        reflectionQuestion: 'Why do corporations need governance mechanisms?',
        options: [
          'To align manager incentives with shareholder value',
          'Because all managers are perfectly aligned already',
          'To remove the need for valuation',
          'Because governance eliminates all risk',
        ],
        correctAnswer: 'To align manager incentives with shareholder value',
        term: 'Agency Theory',
        researchPapers: [
          {
            title: 'Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure',
            authors: 'Michael C. Jensen and William H. Meckling',
            year: '1976',
            summary: 'Seminal work on agency costs and the separation of ownership and control.',
            url: 'https://www.jstor.org/stable/10.2307/258011',
          },
        ],
      },
      {
        id: 'lesson-17',
        title: 'Board Oversight',
        summary: 'Boards monitor management, challenge strategy, and help align incentives with long-term value creation.',
        explanation: `
          Board oversight is the main governance mechanism through which principals supervise agents. The board is responsible for reviewing strategy, monitoring executive performance, approving major investments, and overseeing risk management. Effective boards are independent, involved, and willing to challenge management when the firm’s strategy or incentives diverge from long-term value maximisation.

          Strong governance improves access to capital by increasing investor confidence. Weak governance, by contrast, raises uncertainty and can increase the required return demanded by investors because agencies and opportunism are more likely to reduce value.
        `,
        simpleExplanation: 'The board acts as a critical mechanism for monitoring management and protecting shareholder interests.',
        example: 'A board may reject an expansion plan if it does not clear the firm’s required return threshold or if the risk profile is unacceptable.',
        analogy: 'The board is like a steering committee that keeps the firm on course and prevents drift from the strategic plan.',
        reflectionQuestion: 'Why is board oversight important in corporate finance?',
        options: [
          'Because it reduces agency problems and improves strategic accountability',
          'Because it guarantees higher profits',
          'Because it eliminates lawsuits',
          'Because it guarantees market efficiency',
        ],
        correctAnswer: 'Because it reduces agency problems and improves strategic accountability',
        term: 'Board Oversight',
        researchPapers: [
          {
            title: 'The Cadbury Report',
            authors: 'Cadbury Committee',
            year: '1992',
            summary: 'Landmark governance framework on board effectiveness and shareholder accountability.',
            url: 'https://www.ecgi.global/content/cadbury-report',
          },
        ],
      },
      {
        id: 'lesson-18',
        title: 'Financial Distress',
        summary: 'Financial distress occurs when a firm cannot meet obligations and the costs of distress can destroy economic value.',
        explanation: `
          Financial distress is a central concern in capital structure analysis. It occurs when a firm is unable to meet its obligations or maintain required liquidity. Distress can arise from weak cash flows, poor strategic choices, high leverage, or unanticipated macroeconomic shocks.

          The costs of distress include lost investment opportunities, reduced flexibility, legal and restructuring costs, and reputational damage. These costs can be severe even if the firm is not formally insolvent. This is why leverage must be managed carefully: higher debt can increase expected returns to equity, but it also increases the downside risk to the whole capital structure.
        `,
        simpleExplanation: 'Financial distress is the condition in which a firm struggles to meet its commitments, creating severe value losses.',
        example: 'A highly levered retailer may be forced to sell assets or renegotiate terms during a downturn if cash flows fall below debt obligations.',
        analogy: 'Financial distress is like a building with too much weight on the foundation: the structure may still stand for a while, but the risk of collapse rises materially.',
        reflectionQuestion: 'Why can excessive leverage reduce firm value?',
        options: [
          'Because it raises the probability of distress and its associated costs',
          'Because leverage has no tax benefits',
          'Because equity is always risk-free',
          'Because debt never creates control issues',
        ],
        correctAnswer: 'Because it raises the probability of distress and its associated costs',
        term: 'Financial Distress',
        researchPapers: [
          {
            title: 'Bankruptcy Costs and the Agency Costs of Debt',
            authors: 'Michael C. Jensen and William H. Meckling',
            year: '1976',
            summary: 'Shows how leverage creates distress and agency costs that affect firm value.',
            url: 'https://www.jstor.org/stable/10.2307/2788528',
          },
        ],
      },
      {
        id: 'lesson-19',
        title: 'Strategic Risk and Capital Allocation',
        summary: 'Strategic risk reflects the possibility that the firm’s choices do not generate expected returns or competitive advantage.',
        explanation: `
          Strategic risk is the uncertainty surrounding the firm’s business decisions and competitive position. It includes the risk that a chosen strategy fails to generate the expected operating cash flows, that a market is misread, or that execution is weaker than expected.

          This matters because financing and investment decisions are ultimately about economic value. A project may look attractive on the surface but still destroy value if the strategic logic is weak or if competitive barriers are poor. Strategic risk therefore sits alongside financial risk in determining acceptable investment thresholds.

          Capital allocation is only as strong as the strategic assumptions behind it. A disciplined capital allocation process must evaluate both the expected returns and the likelihood that those returns will be achieved.
        `,
        simpleExplanation: 'Strategic risk is the uncertainty that a chosen market or business strategy will not generate the expected returns.',
        example: 'A firm may enter a market with high revenue potential but low defensibility, leading to weak long-term returns.' ,
        analogy: 'Strategic risk is like choosing a route across difficult terrain without knowing whether the path is sustainable or simply looks promising on paper.',
        reflectionQuestion: 'Why does strategic risk matter for investment decisions?',
        options: [
          'Because it affects the cash flows and value that projects actually generate',
          'Because it guarantees higher margins',
          'Because it reduces the need for governance',
          'Because it always lowers firm risk',
        ],
        correctAnswer: 'Because it affects the cash flows and value that projects actually generate',
        term: 'Strategic Risk',
        researchPapers: [
          {
            title: 'Competitive Strategy',
            authors: 'Michael E. Porter',
            year: '1980',
            summary: 'Classic analysis of competitive advantage and strategic choice under uncertainty.',
            url: 'https://www.isc.hbs.edu/strategy/strategy-bibliography.html',
          },
        ],
      },
      {
        id: 'lesson-20',
        title: 'Value Maximisation and Corporate Purpose',
        summary: 'The purpose of financial management is not simply to grow the firm, but to maximise long-term economic value for owners and stakeholders.',
        explanation: `
          The central objective of corporate finance is value maximisation. This requires a disciplined approach to capital allocation, financing, governance, and risk-taking. It is not enough to pursue growth in volume or complexity if the returns do not exceed the cost of capital.

          Value maximisation must therefore be interpreted in a long-term and economically rigorous way. It requires managers to weigh strategic opportunity against risk, financial flexibility, and governance quality. In this sense, finance is closely tied to stewardship: the firm succeeds not by short-term opportunism but by sustainable value creation over time.
        `,
        simpleExplanation: 'A firm should pursue projects and policies that increase long-term economic value rather than appearance or short-term growth.',
        example: 'A firm may avoid expansion into a low-return market if the capital required would generate less value than alternative projects.',
        analogy: 'Value maximisation is like investing in the project that produces the best net gain rather than the one that looks largest on paper.',
        reflectionQuestion: 'What is the objective of value maximisation?',
        options: [
          'To increase long-term economic value for owners and stakeholders',
          'To pursue all growth opportunities regardless of return',
          'To eliminate all risk from the corporate portfolio',
          'To maximise accounting revenue without regard to capital cost',
        ],
        correctAnswer: 'To increase long-term economic value for owners and stakeholders',
        term: 'Value Maximisation',
        researchPapers: [
          {
            title: 'The Cost of Capital, Corporation Finance and the Theory of Investment',
            authors: 'Franco Modigliani and Merton H. Miller',
            year: '1958',
            summary: 'Seminal analysis of value creation and investment efficiency in firms.',
            url: 'https://www.jstor.org/stable/10.2307/2550593',
          },
        ],
      },
    ],
  },
  {
    id: 'module-5',
    title: 'Module 5',
    subtitle: 'Valuation, Strategy and Long-Term Stewardship',
    description:
      'This module integrates valuation, financing, governance, and strategy to explain how firms sustain value creation over time. It focuses on the disciplined allocation of capital under uncertainty and the role of stewardship in long-term growth.',
    lessons: [
      {
        id: 'lesson-21',
        title: 'Equity Valuation',
        summary: 'Equity value is the present value of the future cash flows available to shareholders.',
        explanation: `
          Equity valuation is the process of estimating the value of a company’s shares by discounting expected future cash flows to equity holders. This approach requires forecasts of dividends, free cash flow to equity, or residual earnings, together with a cost of equity that reflects shareholder risk.

          Unlike debt, equity is a residual claim. That means valuation must reflect growth expectations, uncertainty, and the risk attached to future returns. The market price of equity can diverge from intrinsic value when optimism, pessimism, or information asymmetry becomes significant, which is why valuation is both analytical and interpretive.
        `,
        simpleExplanation: 'Equity value reflects the present value of the future returns available to shareholders after other claims are met.',
        example: 'A fast-growing company may command a high equity value if its future free cash flows are expected to grow strongly.',
        analogy: 'Equity valuation is like pricing the claim on the remaining profits after all debts and fixed obligations are paid.',
        reflectionQuestion: 'Why does equity valuation require a higher discount rate than debt valuation?',
        options: [
          'Because equity is a residual claim and therefore riskier than debt',
          'Because debt always has higher returns',
          'Because dividends are risk-free',
          'Because equity is never affected by growth',
        ],
        correctAnswer: 'Because equity is a residual claim and therefore riskier than debt',
        term: 'Equity Valuation',
        researchPapers: [
          {
            title: 'The Theory of Investment Value',
            authors: 'John Burr Williams',
            year: '1938',
            summary: 'Classic foundation for equity valuation using discounted cash flows and expected future returns.',
            url: 'https://archive.org/details/in.ernet.dli.2015.216200',
          },
        ],
      },
      {
        id: 'lesson-22',
        title: 'Strategic Investment Decisions',
        summary: 'Firms should invest only when strategic opportunity and economic return align with the firm’s required return.',
        explanation: `
          Strategic investment decisions are among the most important determinants of long-term value. The firm must compare the expected economic return of alternative uses of capital against the opportunity cost of that capital and against strategic fit. The right decision is not simply the largest project or the fastest growth plan; it is the investment that maximises net present value and contributes to sustainable competitive advantage.

          This is why capital budgeting cannot be separated from strategy. Financial returns, competitive position, and execution risk are intertwined. A project may expand revenue but still destroy value if it requires too much capital, carries excessive risk, or is inconsistent with the firm’s strategic capabilities.
        `,
        simpleExplanation: 'Strong investment decisions are those that create value while fitting the firm’s competitive and strategic position.',
        example: 'A company may avoid a large expansion if the required return is high and the market position is weak, even if revenue growth appears attractive.',
        analogy: 'Strategic investment is like choosing the best crop for a field rather than simply the crop with the largest apparent yield.',
        reflectionQuestion: 'Why do firms need to evaluate strategic investments beyond accounting profit?',
        options: [
          'Because economic value depends on risk-adjusted return and strategic fit',
          'Because accounting rules automatically determine the right investment',
          'Because growth alone creates value in all cases',
          'Because strategic opportunities are never risky',
        ],
        correctAnswer: 'Because economic value depends on risk-adjusted return and strategic fit',
        term: 'Strategic Investment',
        researchPapers: [
          {
            title: 'Competitive Strategy',
            authors: 'Michael E. Porter',
            year: '1980',
            summary: 'Framework for connecting competitive advantage with strategic value creation.',
            url: 'https://www.isc.hbs.edu/strategy/strategy-bibliography.html',
          },
        ],
      },
      {
        id: 'lesson-23',
        title: 'Capital Raising and Market Signals',
        summary: 'The way a firm raises finance communicates information about its expected performance and risk.',
        explanation: `
          Capital raising is not only a financing act; it is also a communication event. Investors interpret the choice of securities, timing, and structure as signals about the firm’s expectations and prospects. When the firm issues securities, the market forms inferences about investment opportunities, risk, and management credibility.

          For example, issuing equity may signal weakness if the market believes management is capitalising on temporarily inflated share prices. Debt issuance can signal confidence in stable cash flows but also raises the risk of financial distress. The interaction between market perception and financing policy is therefore central to corporate finance.
        `,
        simpleExplanation: 'The financing choice itself conveys information to the market about management expectations and internal conditions.',
        example: 'A firm that issues equity during a period of high share prices may be viewed cautiously if investors suspect timing motives or poor internal opportunities.',
        analogy: 'Financing choices are like a signal sent to the market about the confidence and knowledge of management.',
        reflectionQuestion: 'Why may financing choices be interpreted as signals?',
        options: [
          'Because investors infer information about risk, confidence, and opportunity from issuance decisions',
          'Because all capital raising is fully transparent',
          'Because debt and equity are always equivalent',
          'Because markets ignore financing choices',
        ],
        correctAnswer: 'Because investors infer information about risk, confidence, and opportunity from issuance decisions',
        term: 'Capital Raising and Market Signals',
        researchPapers: [
          {
            title: 'Signalling and the Market for Capital',
            authors: 'Spence',
            year: '1973',
            summary: 'Key theory on how markets interpret information and signals in economic exchange.',
            url: 'https://www.jstor.org/stable/1882010',
          },
        ],
      },
      {
        id: 'lesson-24',
        title: 'Corporate Governance as Value Protection',
        summary: 'Good governance reduces agency costs and protects long-run firm value by improving accountability.',
        explanation: `
          Corporate governance is a mechanism for protecting investors and ensuring that managerial decisions support long-term value creation. It includes the board, committees, executive incentives, disclosure standards, and oversight structures. The quality of governance affects both the cost of capital and the ability to attract patient capital.

          Board independence, institutional ownership, and transparent governance can reduce agency costs and improve strategic discipline. By contrast, weak governance often allows managerial entrenchment or poor capital allocations that erode value over time.
        `,
        simpleExplanation: 'Corporate governance matters because it helps ensure that managers act in the interests of owners and long-run value creation.',
        example: 'A firm with a strong board and transparent disclosures often faces lower financing costs because investors are more confident in governance quality.',
        analogy: 'Governance is like a reliable control system that keeps the organisation aligned with its destination.',
        reflectionQuestion: 'Why does governance affect cost of capital?',
        options: [
          'Because it reduces uncertainty and agency costs that investors discount',
          'Because it always reduces taxes',
          'Because all investors prefer leverage regardless of governance',
          'Because governance is unrelated to financing decisions',
        ],
        correctAnswer: 'Because it reduces uncertainty and agency costs that investors discount',
        term: 'Corporate Governance',
        researchPapers: [
          {
            title: 'The Cadbury Report',
            authors: 'Cadbury Committee',
            year: '1992',
            summary: 'Long-standing governance framework for accountability and oversight in corporate control.',
            url: 'https://www.ecgi.global/content/cadbury-report',
          },
        ],
      },
      {
        id: 'lesson-25',
        title: 'Long-Term Stewardship',
        summary: 'Sustainable corporate finance requires stewardship, discipline, and patience rather than short-term optimisation alone.',
        explanation: `
          The long-term stewardship view of finance recognises that firms are not merely vehicles for short-term earnings but enduring institutions that create value over time. That requires disciplined capital allocation, prudent balance-sheet management, transparent governance, and strategic flexibility in the face of uncertainty.

          Stewardship combines analytical discipline with a sense of responsibility to owners, employees, customers, and other stakeholders. It emphasises resilience, not simply expansion. In this sense, the goal of finance is not only to maximise current returns but to preserve the capacity to generate value repeatedly in changing economic conditions.
        `,
        simpleExplanation: 'Good corporate finance is a long-term stewardship discipline that balances risk, governance, and sustainable value creation.',
        example: 'A company that maintains prudent leverage and strong governance is usually better placed to survive downturns and preserve value over time.',
        analogy: 'Long-term stewardship is like maintaining a durable institution rather than taking short-term gains at the expense of the future.',
        reflectionQuestion: 'Why is stewardship central to corporate finance?',
        options: [
          'Because sustainable value creation depends on governance, discipline, and resilience',
          'Because short-term growth always exceeds long-term value',
          'Because governance has no effect on capital allocation',
          'Because financing strategy can ignore risk permanently',
        ],
        correctAnswer: 'Because sustainable value creation depends on governance, discipline, and resilience',
        term: 'Long-Term Stewardship',
        researchPapers: [
          {
            title: 'Agency Costs of Free Cash Flow, Corporate Finance, and Takeovers',
            authors: 'Michael C. Jensen',
            year: '1986',
            summary: 'Classic framework for value discipline and stewardship under uncertainty.',
            url: 'https://www.jstor.org/stable/3890432',
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

