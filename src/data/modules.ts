import type { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'module-1',
    title: 'Module 1',
    subtitle: 'Risk, Return and Capital Markets',
    description:
      'This module introduces the core concepts of risk, return, and value creation in corporate finance.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Risk and Return',
        summary: 'Investors require higher expected returns when they bear more uncertainty.',
        explanation: `
          Risk and return are inseparable in finance. Investors demand compensation for accepting uncertainty,
          and firms must compare expected project returns against the cost of capital before investing.

          Systematic risk is especially important because it cannot be diversified away. It is the component
          priced by capital markets and reflected in a firm's required return. A project creates value only when
          its expected return exceeds the return required by investors.
        `,
        simpleExplanation: 'Higher risk usually means higher expected return.',
        example: 'A startup may offer a far higher expected return than a government bond because the startup is much riskier.',
        analogy: 'Risk is like walking a steeper trail: the tougher the path, the higher the reward expected for taking it.',
        reflectionQuestion: 'Why do investors demand a higher expected return for riskier investments?',
        options: [
          'Because they require compensation for bearing uncertainty',
          'Because regulations force them to do so',
          'Because risk always reduces value',
          'Because debt is always riskier than equity',
        ],
        correctAnswer: 'Because they require compensation for bearing uncertainty',
        term: 'Risk and Return',
        researchPapers: [
          {
            title: 'Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk',
            authors: 'William F. Sharpe',
            year: '1964',
            summary: 'Introduces the relationship between systematic risk and expected return.',
            url: 'https://www.jstor.org/stable/10.2307/2977928',
          },
        ],
      },
      {
        id: 'lesson-2',
        title: 'Time Value of Money',
        summary: 'A rupee today is worth more than a rupee in the future.',
        explanation: `
          The time value of money is one of the foundations of finance. Money today is worth more than the same amount later
          because it can be invested or used immediately. Discounting converts future cash flows into present value, while
          compounding measures how today’s money grows over time.
        `,
        simpleExplanation: 'Money now is more valuable than the same money later.',
        example: 'Receiving ₹10,000 today is more valuable than receiving ₹10,000 in five years because you can invest the amount sooner.',
        analogy: 'A rupee today is a seed already planted; a rupee later is a seed not yet sown.',
        reflectionQuestion: 'Why do future cash flows need to be discounted?',
        options: [
          'Because money has an opportunity cost over time',
          'Because future cash flows are always smaller',
          'Because accounting rules always reduce them',
          'Because market prices ignore time',
        ],
        correctAnswer: 'Because money has an opportunity cost over time',
        term: 'Time Value of Money',
      },
      {
        id: 'lesson-3',
        title: 'Value Creation',
        summary: 'A firm creates value when it earns more than the cost of capital.',
        explanation: `
          Value creation is the central objective of corporate finance. A business creates wealth when it invests capital
          in projects that earn more than the return required by investors. This principle underpins net present value,
          capital budgeting, and strategic investment decisions.
        `,
        simpleExplanation: 'A project creates value when it earns above the cost of capital.',
        example: 'If a project costs ₹50 lakh and creates ₹60 lakh in present value, it adds ₹10 lakh of value.',
        analogy: 'Value creation is like earning more from an investment than the price of borrowing the capital to fund it.',
        reflectionQuestion: 'When does a project create shareholder value?',
        options: [
          'When it earns more than the cost of capital',
          'When it increases revenue regardless of profit',
          'When it avoids risk completely',
          'When it reduces debt immediately',
        ],
        correctAnswer: 'When it earns more than the cost of capital',
        term: 'Value Creation',
      },
    ],
  },
  {
    id: 'module-2',
    title: 'Module 2',
    subtitle: 'Equity, Debt and Capital Structure',
    description:
      'This module explains how firms choose between debt and equity, and how financing choices affect risk, value, and returns.',
    lessons: [
      {
        id: 'lesson-4',
        title: 'Capital Structure',
        summary: 'Capital structure is the mix of debt and equity used to finance a firm.',
        explanation: `
          Capital structure is not just a financing detail; it is a strategic decision. Debt is often cheaper because interest
          may be tax-deductible and lenders have priority claims. But too much debt increases financial distress risk.
          Equity is more expensive but gives more flexibility and avoids fixed repayment obligations.
        `,
        simpleExplanation: 'The right debt-equity mix lowers the cost of capital without creating excessive risk.',
        example: 'A company may use debt to fund stable cash-generating assets, but too much leverage can threaten solvency in a downturn.',
        analogy: 'Capital structure is like designing a bridge: too much weight on one side can make it unstable.',
        reflectionQuestion: 'Why is capital structure strategically important?',
        options: [
          'Because financing choices affect risk, return, and firm value',
          'Because debt is always better than equity',
          'Because equity has no cost',
          'Because all firms should use maximum leverage',
        ],
        correctAnswer: 'Because financing choices affect risk, return, and firm value',
        term: 'Capital Structure',
      },
      {
        id: 'lesson-5',
        title: 'Cost of Capital',
        summary: 'The cost of capital is the return required by investors for financing the firm.',
        explanation: `
          The cost of capital reflects the required return of a firm’s debt and equity investors. It is used as the benchmark
          for evaluating projects and determining whether they create value. A firm’s financing mix affects its average cost of capital.
        `,
        simpleExplanation: 'The cost of capital is the blended return investors require for funding the business.',
        example: 'A business with expensive equity and moderate debt may have a higher cost of capital than a stable firm with more debt and lower risk.',
        analogy: 'The cost of capital is the price a firm must pay to keep its capital providers satisfied.',
        reflectionQuestion: 'Why is the cost of capital used in project appraisal?',
        options: [
          'Because it reflects the return investors require for their funds',
          'Because it is always constant for every firm',
          'Because it ignores financing structure',
          'Because it guarantees project success',
        ],
        correctAnswer: 'Because it reflects the return investors require for their funds',
        term: 'Cost of Capital',
      },
      {
        id: 'lesson-6',
        title: 'Discounted Cash Flow',
        summary: 'DCF values an asset by discounting expected future cash flows to present value.',
        explanation: `
          Discounted cash flow analysis values an asset by forecasting future cash inflows and discounting them at the appropriate
          required rate of return. This makes it one of the most important tools in corporate finance, because it links risk,
          timing, and value into a single decision framework.
        `,
        simpleExplanation: 'Future cash flows are worth less in today’s terms.',
        example: 'A project generating ₹5 lakh a year for five years is valued by discounting each year’s cash flow back to today.',
        analogy: 'DCF is like converting a stream of future income into today’s equivalent value using the correct discount rate.',
        reflectionQuestion: 'Why is DCF central to valuation?',
        options: [
          'Because it links cash flows, risk, and time into one value estimate',
          'Because it eliminates all uncertainty',
          'Because it ignores financing cost',
          'Because it is only used for debt pricing',
        ],
        correctAnswer: 'Because it links cash flows, risk, and time into one value estimate',
        term: 'Discounted Cash Flow',
      },
    ],
  },
];

export const getModuleById = (id: string) => modules.find((module) => module.id === id);

export const getLessonById = (moduleId: string, lessonId: string) => {
  const module = getModuleById(moduleId);
  return module?.lessons.find((lesson) => lesson.id === lessonId);
};
        
  

