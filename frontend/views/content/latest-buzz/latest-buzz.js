myApp.controller('LatestCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $state, $location,$stateParams) {
    $scope.template = TemplateService.getHTML("content/latest-buzz/latest-buzz.html");
    TemplateService.title = "Latest Buzz"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.cssMain = "header-icons";
    $scope.myUrl = $location.absUrl();
    console.log("$scope.myUrl",$scope.myUrl);
    $scope.blogs = [{
        id: "stock-market",
        title: "Learn About Stock Markets Without Risking Your Money",
        content: "<p>The stock market has always been an allure for people who want to trade and invest. Here are the best virtual sites or apps where you can learn about the <strong>stock market</strong> without losing your money. </p> <h5>Moneybhai</h5> <p>It is a <strong>virtual stock trading</strong> game by MoneyControl, a virtual <strong>trading</strong> platform. Once you create an account in this game, you will receive virtual money worth Rs. 1 crore. The trading limit in this game is 1 crore. It means that you can buy and sell stocks and other financial instruments worth Rs. 1 crore on any given day. The different instruments that you can invest in include stocks, mutual funds, bonds and many more. In this game, you can <strong>invest</strong> the virtual money in different <strong>virtual</strong> options and pay a virtual brokerage fee as well. This game is a good way to get a feel of how the stock market works and to learn about the performance of different <strong>financial</strong> instruments. This game also has the option of reset; so, whenever you feel that you made a mistake while <strong>investing</strong> or trading, you can reset the game to the initial corpus of Rs. 1 crore. </p> <h5>TrakInvest</h5> <p>As the name suggests, TrakInvest is an <strong>investment guide</strong>. If you have a vague idea about the stock market and want to learn the basics related to it, then this is a good platform. This website is best suited for <strong>beginners</strong> who have no idea what the stock market is all about. The informative and useful content of this website along with the simple interface make it a good guide. You can create your portfolio that’s free of all risks and you can hone your market knowledge. </p> <h5>Dalal Street</h5> <p>Dalal Street is a platform that is similar to Moneybhai. It is an investment journal that offers the user a virtual sum of Rs. 1,000,000. You can engage in real-time trades with the help of your virtual trade portfolio. The best way to learn about the stock market is to participate in it. This website allows you to participate in a <strong>virtual stock exchange</strong> to improve your skills so that you can move onto a real stock exchange. Not just that, this website also allows you to share and discuss your strategies with other like-minded people.</p> <h5>Moneypot</h5> <p>It is a virtual trading game that is quite popular in India. It is a stock trading platform that students, corporates and investors will thoroughly enjoy. It strives to create an online investors community through a socially open trading platform. </p> <p>Virtual stock trading is ideal for beginners because it allows them to indulge in direct <strong>buying and selling of stocks</strong>. There is no real money involved, so the investor doesn’t stand to lose anything, and it is low risk. It provides a <strong>real-time trading</strong> experience and the investor will understand the operation of the stock market and the functioning of different instruments. Even if the investor makes a mistake, it will not cost him or her anything. Instead of merely reading about the stock market, a virtual stock market will help the to test their theoretical knowledge.</p>"
    }, {
        id: "5big-mistakes",
        title: "5 Big Mistakes That Investors Make And Its Impact",
        content: "<p>Common mistakes that investors make unknowingly and the impact of these mistakes on their lives. </p> <h5>Mistake#2: Not saving for the future</h5> <p>We all tend to live in the present and not many of us plan for the future. It is good to not worry too much about the future, but that doesn’t mean that you completely ignore your future. You need to understand that there might come a day when you can no longer earn steadily. What will happen if you don’t have a steady source of income? You cannot afford your lifestyle and face a severe money shortage. Imagine, if you retire at the age of 60 years with a bank balance that will serve you for only five years? Well, you need to avoid that and therefore, you need to save! </p> <h5>Mistake#3: No term plan</h5> <p>An <strong>accident</strong> can change everything. No one can foresee an accident or even prevent one. However, the one thing that we can do is plan such that we can reduce our losses from an accident. There are numerous accidents that take place daily and it makes sense to protect yourself from such contingencies than to suffer a huge and unexpected loss. Therefore, it is a good idea to insure your life and the lives of your family members as well. In case of the unavoidable, at least the ones you care for will not suffer. </p> <h5>Mistake#4: Over investing in fixed deposits</h5> <p><strong>Fixed deposit</strong> is a secure investment. You simply need to park your funds in a secured account and it will grow in value over the years. So, what is the problem with this investment? Unlike other investments, fixed deposits don’t outgrow the inflation in the economy. It means that you might think that your <strong>investments</strong> increase but their purchasing power stays the same.</p> <h5>Mistake#5: Incurring too much debt </h5> <p>Investors are usually of two kinds – on who buy things with the money they save and the other who usually makes purchases with their future earnings (loans). The ‘purchase now and pay later’ attitude just increases the <strong>debt</strong> while the income might or might not increase. This is a wrong attitude to go about your expenses. Before you know it, you will be knee deep in debt. </p>"
    }, {
        id: "budget-2018",
        title: "12 Things About The Budget-2018, Related To The Middle Class",
        content: "<p>The <strong>annual budget</strong> means different things for different people. What does the budget mean for the <strong>middle class</strong> ? <br><br>There are no changes in the <strong>taxation</strong> slab rates. It means that you will pay taxes as usual. Perhaps this is one of the biggest disappointments of the 2018 budget.</p> <ul> <li>The standard <strong>deduction</strong> that you are entitled to is Rs 40,000. It means that you can reduce the taxable income by Rs 40,000 along with any other deductions and benefits available. However, transport allowance and medical reimbursement equivalent to Rs 19,200 and Rs 15,000 are no longer considered as benefits. </li> <li>There is a 10% tax applicable on long-term capital gains on equity without indexation benefits. Up until now, if you sold equity funds or stocks after holding for at least one year, then the profit on such sale was exempt from taxation. However, now you need to pay a tax @10% if the profit is over 1 lakh. </li> <li>The dividends you receive from equity funds and stocks will be taxed at 10%. However, this deduction is made at source and will be deducted by the company. So, the amount of dividend you receive is the remainder after deducting tax.</li> <li>The health and education cess are increased from 3% to 4%. Cess is the additional tax you pay on the income tax. For instance, if your income tax is around Rs 50,000, then the cess you need to pay is Rs 2000.</li> <li><strong>Senior citizens</strong> no longer have to pay tax on interest on all deposits as well as bank interest up to the amount of Rs 50,000. Senior citizens don’t have to worry about any TDS deductions for interests from deposits up to Rs 50,000. The limit is increased from Rs 10,000 to Rs 50,000 now. </li> <li>According to the new budget, the deduction for health insurance under section 80c for senior citizens is increased from Rs 30,000 to Rs 50,000. The 2018 budget is quite a boon for senior citizens. </li> <li>According to section 80DDB, all senior citizens are eligible for a tax deduction up to Rs 60,000 and Rs 80,000 for very senior citizens for medical expenses for the treatment of certain critical illnesses. The limit is increased to Rs 1 lakh now</li> <li>The corporate tax for companies with a turnover of less than Rs 250 crores per year is reduced from 30% to 25%.</li> <li>The EPF contribution for new women workers is reduced from 12% to 8%, for the first three years. Apart from this, the government will now have to make a 12% contribution for the same. </li> <li>The <strong>government</strong> will now introduce a health insurance scheme for the weaker sections of the society. According to this scheme, every family will be entitled for health insurance for the sum of Rs 5 lakhs.</li> </ul> <p>The financial budget for the year 2018 is quite different from the previous budgets and is favorable especially for the senior citizens in the country. </p>"
    }, {
        id: "fake-gst",
        title: "How To Check A Fake GST Number?",
        content: "<p>Learn how to check a fake GST number is less than 30 seconds.</p> <p>These days, a lot of restaurants as well as business are using <strong>fake GST</strong> numbers on the bill. You probably came across restaurants that never mentioned any taxes in their previous bills have started to charge 18% taxes in the name of GST. You might wonder why you must learn about this. Well, fake GST numbers allow the businesses to charge <strong>tax</strong> from the customers even when the business is not registered with the GST department.</p> <p>A common man might think that with the introduction of GST, everything is costlier by 12-18%. However, if the <strong>business</strong> does not register itself with the GST department, all the so-called GST they charge directly goes into their pocket. You no longer have to fall prey to this seemingly vicious scheme. It is quite easy to verify the GST number and you can do so in less than 30 seconds. </p> <p>The GST number consists of 15 characters and it can be broken down into 5 parts. The first two digits show the state code, the next 10 digits show the PAN of the registered business, the 13th digit is the registration number of the business, the 14th digit is ‘Z’ by default and the last digit is the check code. </p> <p>The first step is to check the GST number printed on the bill or the receipt. The business needs to mention their GST number and if it isn’t, then you don’t have to pay the tax. Not just that, but it is illegal to charge GST if the number is not mentioned on the <strong>invoice</strong>. </p> <p>Once you see the GST number, you need to visit the GST website of the <strong>government</strong> and enter the given GST number. Then enter the Captcha as displayed and click on Submit. </p> <p>If the GST number is not fake, then you will see the registered business name on the website and it needs to match the one that’s printed on the invoice. </p> <p>There are some businesses that don’t have a confirmed <strong>registration</strong> number but instead have a provisional GST number. Well, don’t you worry! You can still verify the same. You need to visit the official GST website, then select the option of “verify provisional ID status.” You need to enter the necessary details like the state, ID type, ID number and the verification code. Once you enter the necessary details, you can check if the concerned business does in fact have a provisional GST number or not. </p> <p>A business can have a registered GST number or a provisional GST number. Regardless of the status of approval, no one can charge you for GST if they don’t mention the number on the invoice. </p> <p>If you ever come across any business or establishment with a fake GST number or no GST number, then you can contact the following. You can also contact the same for any queries related to GST. </p> <p><strong>GST Complaint mail ID : </strong><a href='mailto:helpdesk@gst.gov.in'>helpdesk@gst.gov.in</a></p> <p><strong>GST Helpline Number : </strong> <a href='tel:0124-4688999'>0124-4688999</a> or <a href='tel:0120-4888999'>0120-4888999</a></p>"
    }, {
        id: "bank-balance",
        title: "How To Check Your Bank Balance On The Phone Without Internet",
        content: "<p>You don’t need Internet to check your <strong>bank balance</strong>; all you need is your phone! That’s it! </p> <p>&nbsp;India is certainly in the midst of the technology revolution, in terms of mobile and <strong>Internet usage</strong>. However, it doesn’t mean that everyone has access to Internet on their <strong>mobile phones</strong>. Well, the good news is that you can check your bank balance even if you don’t have Internet on your phone. Not just that, you can perform basic banking facilities like generating the mini statement and even transfer funds. There are two ways in which you can check your mobile balance and they are the missed call facility and the other one is to dial *99# form your mobile phone. </p> <h5>Missed call facility</h5> <p>According to the new rules imposed by banks, usage of ATM is chargeable after certain number of transactions. However, with the missed call facility to, you can check your bank balance without any hassle. To use this facility, you need to activate a few features before you use this free facility. You need to register your mobile number with the concerned bank. With the missed call facility, you can check the previous 5 transactions along with the bank balance. Every bank has a specific missed call number and you need to obtain this number from your bank. Any call that you make to the given number from the <strong>registered phone number</strong> will get disconnected automatically after a couple of rings. Once you call that number, you will receive messages with information about your bank balance along with the transaction log of the previous 5 transactions. If you didn’t register your number, then you will receive a message with the text “Your mobile number is not registered for this service.” If you have different types of accounts like the savings account, current account, or even an overdraft account, then a default account will be selected in the following order of priority- savings account, current account, overdraft account, cash credit and any other account. If you have more than one similar account, then the latest opened account will automatically become the default account for the registered phone number with your bank. </p> <h5>*99# facility</h5> <p>NPCI (National Payment Corporation of India) initiated a unique service system for all GSM mobile subscribers all over India, which allows a customer to check their bank balance without any Internet access. You need to dial *99#USSD code from your handset. The code *99# is common for all telecom operators. There are no roaming charges applicable on this service and you don’t need to download any app. Also, this facility is available in 12 Indian regional languages.</p> <ul> <li>To use this service, you need to dial *99# from your handset. </li> <li>The next step is to enter the 3 letters for the bank’s short name or the initial four letters of the IFS code.</li> <li>Once you enter either of these details, a menu with different banking services options will appear. </li> <li>Select a suitable option and voila! It is as simple as that.</li> </ul>"
    }, {
        id: "tax-return",
        title: "Do I Need To File My Income Tax Return?",
        content: "<p>File income tax return and earn the 'refund' you rightly deserve.</p> <p>Benjamin Franklin was absolutely right when he said, “In this world nothing is certain, except death and taxes.”</p> <p><strong>Income tax</strong> is a direct tax and it is levied on your personal income. Income tax is the tax that you need to pay on your income or your earnings. In fact, it is one of the most popular taxes and the least understood concept of personal finance. Why do you have to pay income tax? Tax is the source of revenue for the <strong>government</strong> and it helps fund all governmental activities and services for the public. Everyone who earns an income needs to file income tax returns. </p> <p>Evert taxpayer needs to declare their income to the <strong>IT department</strong> at the end of the financial year in the form prescribed by the government. This form is the ITR and it is summarized statement of your incomes in a given time frame. The different forms of income include salaries, pensions, income from business or a profession, other sources like interest and dividends, capital gains, income from house property and the like. The CBDT prescribes seven forms and you can use any of these forms to file your IT returns. The forms are ITR 1, ITR2A, ITR 2, ITR 3, ITR 4S, ITR 4, ITR 5, ITR 6 and ITR 7.</p> <p>There are different benefits of filing <strong>Income Tax Returns</strong>. If you want to take a loan or even apply for a Visa, then you need a proof of income tax return that you file. You don’t need to have taxable income to file IT returns. It helps to build a proof of your finances or your source of income. If your income is less than the taxable limit, but your employer has charged <strong>TDS</strong> (Tax Deducted at Source) or if you earn some income from any part-time consultancy work and the company deducted TDS @ 10%, then you can claim a refund of the TDS hence deducted. You are entitled to this refund, if your income is below the taxable limit. If you want to claim this refund, then you must file your IT returns.</p> <p>The ITR is not only a proof of your income, but it is also a proof that you have duly paid your taxes for the income you earn in any financial year.</p> <p>You need to file ITR in the following cases: </p> <ul> <li>If your gross total income exceeds 2.5 lakhs. </li> <li>The income earned or accrued by an NRI in India. </li> <li>If you want to carry forward any losses incurred like capital losses or business losses. </li> <li>If you want to claim a refund. </li> <li>If TDS is deducted on any income you earn. </li> </ul> <p>Did you know that in a country with a population of more than 1 billion, only 3% are liable to pay their income tax? Tax evasion and the non-filing of Income Tax Returns is illegal (it means that it can be penalized). So, file your income tax returns on time and avoid all the hassle.</p>"
    }, {
        id: "buy-healthinsurance",
        title: "Things To Keep In Mind Before Buying Health Insurance",
        content: "<p>Health is wealth, but how do you select the perfect health insurance plan?</p> <p>Here are the important factors that you need to consider before you decide to buy any <strong>health insurance. </strong></p> <h5>Claim Process</h5> <p>Claim process is the time that’s necessary for settlement. It is vital that you select an insurance policy with a simple <strong>claim</strong> process and cashless benefit. Look for good customer support service as well.</p> <h5>Waiting Period</h5> <p>The period that you need to wait for before you can apply to claim your insurance for a pre-existing medical condition. Regardless of the insurance company you choose, all policies have a waiting period. You need to select one that doesn’t have a lengthy waiting period. </p> <h5>Lifetime renewal</h5> <p>Policies tend to have different rules regarding renewability. Some are limited up to 60-70 years and others offer lifetime renewability. Always opt for a policy that offers lifetime renewability.</p> <h5>Room rent cap</h5> <p>In case of any <strong>hospitalization</strong>, the insured person is entitled to the room rent payable. So, you need to check the cap on the room rent chargeable. Make sure that the policy will pay for a major or the entire rent of the room.</p> <h5>Claim ratio</h5> <p>There are various instances where an insurance claim is either delayed or even rejected by the insurer company. To avoid such troubles, it is a good idea to do a background check and read about the IRDA ratio for claim settlements. A higher ratio implies that the insurance company is trustworthy. </p> <h5>Hospital networks </h5> <p>Carefully go through the information about cashless hospital networks before you purchase a health insurance policy. In case of a medical emergency, it is helpful if you have the option for cashless settlement. </p> <h5>Maternity benefits </h5> <p>There are only a few insurance policies that offer full maternity benefits. If you are recently married or are starting a family soon, then you must check for maternity benefits the policy offers. The cost of pregnancy is increasing steadily by the day and it is better to be prepared for such an expense. </p> <h5>Sub-limit</h5> <p>The sub limit is the monetary cap that the insurer has for an insurance claim. Sub-limits are applicable to different expenses like the room rent, consultation charges of doctors, ambulance charges and any other medical procedures. Either opt for a policy with a high or no sub-limit.</p> <h5>Pre and post hospitalization </h5> <p>Medical treatments usually require pre and post hospitalization and the same is applicable for medicines. Therefore, it is prudent to opt for a policy that covers pre and post hospitalization expenses. </p> <h5>Coverage for critical illnesses </h5> <p>There are certain illnesses that can lead to permanent disability or even death. A good <strong>health insurance policy</strong> needs to provide for such circumstances. </p> <p>The other things that you need to consider are the sum assured, OPD expenses, dental treatments and no claim bonus. Apart from this, you must also check if the insurance policy is for only the insured individual or if it is a family floater.</p>"
    }, {
        id: "save-moretax",
        title: "How To Save More Tax!",
        content: "<p>You can save on your <strong>taxes</strong> if you use deductions and exemptions!</p> <p>There is certainly no limit to the question “How much do you want to earn?” However, with an increase in your income, the tax payable increases as well. Well, don’t you worry! There are a couple of simple ways in which you can save the tax payable. Yes, all the tips mentioned in this section are legal.</p> <p>80C</p> <p>Section 80C of the Income Tax Act provides different categories of income that are deductible from your income. If you deduct certain incomes, then the tax payable will automatically reduce. Items that are exempt under this section include </p> <ul> <li>Public Provident Fund (PPF),</li> <li>National Savings Certificate (NSC),</li> <li>Principal that you repay on home loan, </li> <li>Life insurance premium</li> <li>Deposits with maturity period of minimum five years in bank and the post office.</li> </ul> <h5>Maturity amount or life insurance claim </h5> <p>The amount that you receive on the maturity or by the claim of a life insurance policy is exempt from taxation. However, the precondition that the annual premium assured on the policy doesn’t exceed 20% of the amount assured. If the premium exceeds 20%, then the entire amount you receive is taxable.</p> <h5>Education scholarship </h5> <p>If you receive an education scholarship either from the government or from a private trust, the same is exempt from taxation. The amount you receive as scholarship money is not to be included in the calculation of total income.</p> <h5>Profits from the sale of equity mutual funds/shares </h5> <p>If you hold any equity mutual funds or shares for one year before you sell it, then any profits that you receive from such a sale is exempt from taxation. Such a sale is a long-term capital gain and it is exempt. You need to wait for a period of more than 365 days (366 in a leap year) if you want to claim this exemption. Any sale made before the completion of one year is taxable.</p> <h5>Dividend on equity mutual funds or shares </h5> <p>If you receive any periodical dividends from equity mutual funds or shares, then such a dividend is exempt from taxation. For instance, if you purchase stock and receive a dividend of Rs 30,000 within a period of 10 months, it will still be exempt.</p> <h5>Any gift received on marriage </h5> <p>The gifts you receive on marriage are not taxable. However, this exemption is a one-time benefit. So, any monetary gift (cash or cheque) that you receive on occasion of marriage is not to be included in the calculation of total income. </p> <h5>Interest on savings account</h5> <p>The interest that you receive from your savings account is exempt from taxation up to the amount of Rs 10,000. If the interest you receive is more than Rs 10,000, then the rest will be taxable.</p> <h5>Medical insurance </h5> <p>Any medical insurance claim you receive up to the amount of Rs 15,000 on an insurance policy for self, spouse or dependent children is exempt from taxation. </p> <h5>Any charity </h5> <p>The provisions of 80G specify that any money given, as charity is exempt from the provisions of taxation. </p>"
    }, {
        id: "save-money",
        title: "15 Tricks To Save Money!",
        content: "<p>You don’t need to earn more to save more. Simple tricks can help you save more than ever before.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Envelope system </p> <p>You need to set a couple of envelopes aside for different monthly <strong>expenses</strong>. Select a couple of categories where you face difficult while saving money. Take an envelope, write the expense’s name and place a little cash in it. </p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Cash back credit card </p> <p>You probably use a <strong>credit card</strong>. Just make sure that you use one that offers cash back. You can save while you spend with this feature.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Transportation cost </p> <p>It is perhaps amongst the costliest household expense. Fuel prices seem to increase every day. Use public transport whenever possible or try to pool your travels with others.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Mobile bill </p> <p>If you use a post-paid plan, then it is a good idea to shift to a pre-paid plan. It will help you to keep track of your bill and they are cheaper too.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Online shopping </p> <p>The merchandise available online is cheaper these days when compared to regular stores. Always compare the online and offline prices before you make a purchase. Use coupons and mobile wallets to pay for <strong>shopping</strong>. </p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Grocery shopping</p> <p>Always make a list before you shop for groceries. Don’t just make a list but stick to the list that you make as well. Shop from wholesale outlets instead of the retail ones.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. Entertainment expenses </p> <p>If you don’t read the newspaper or a magazine regularly, cancel the subscription. Use a free app on your mobile instead. Use online portals to book movie tickets (they offer cash back). Reduce or try to eliminate TV subscription altogether. If you have Wi-Fi at home, you can do away with television. </p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. Utility bills</p> <p>A simple step like switching off the lights and fans when you aren’t in a room can help reduce your <strong>utility bills</strong>. Use energy saving lights. Try to minimize the wastage of water and electricity as much as possible.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. Save on food </p> <p>TYou can save on food, if you reduce wastage of food. Try to cook at home as often as possible and eat at home. Order food through those apps that provide cash back or discounts.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. Don’t splurge unnecessarily </p> <p>Don’t splurge on an unnecessary gym membership, on expensive branded products and the like. Don’t buy anything unless it is an absolute necessity. </p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. Unhealthy habits</p> <p>Try to break free of any unhealthy habits like drinking alcohol or smoking cigarettes. Not only are these expensive habits to maintain, but they ruin your health as well.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. No-spend days </p> <p>Fix a couple of no-spend days for yourself like a Sunday where you don’t spend any money</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. Save a little</p> <p>Make it a point to save a fixed sum every week. You don’t necessarily have to save a huge amount, but even small savings add up to a lot in the end.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. Reduce Internet cost </p> <p>Select an ideal Internet plan for usage. Pay only for what you use and don’t select an expensive plan. </p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. Use cash</p> <p>Try to use <strong>cash</strong> as much as you can and avoid paying by cards. Most businesses levy a charge on cashless transactions. </p>"
    }, {
        id: "cc-limit-enhancement",
        title: "Credit Card Limit Enhancement - Good Or Bad?",
        content: "<p>A higher <strong>credit card limit</strong> is not just a status symbol, but something that is quite useful. </p> <p>What exactly does a credit limit mean? As the name suggests, it is the maximum sum of <strong>money</strong> that you can <strong>borrow</strong> from a bank on a given credit card. You can use the credit limit to make any purchases like you normally do. The only difference is that, instead of drawing your funds from your savings account, you create a debt account with your bank. The bank will keep a track of your transactions and will accordingly revise your credit limit based on your transactional history and repayment capacity. </p> <p>There are different parameters that a bank uses to decide the credit limit for individual <strong>credit card applicants</strong>. These criteria include income, credit score and monthly <strong>salary</strong> of a person. According to their credit policy, then bank will decide the credit limit after scrutinizing all these criteria. Don’t fret if the bank offers you a low credit limit. Banks usually revise the credit limit within a period of six to eighteen months, according to the financials and the repayment record. If you pay your bills on time and improve your financial health, then the bank will increase your credit limit as well.</p> <h5>Benefits of a higher credit limit </h5> <p>A major advantage of a <strong>high credit limit</strong> on your credit card is that you can reduce your credit utilization ration, provided you use it judiciously. A lower credit utilization ratio will improve your credit score. For instance, if the credit limit on your card is Rs 50,0000 and you use Rs 25,000 a month, then your credit utilization ratio is 50%. Now, if the credit limit is increased to Rs 75,000 and you spend Rs 25,000 a month, then your credit utilization ratio is 33%. It means that your credit score will improve. </p> <p>If you want to obtain a loan with a bank, then you can use your credit limit to get a better deal for yourself. Banks are prudent when they offer higher credit limits to their customers. If a bank issues a higher credit limit, it means that the bank considers the said individual to be a safe asset. </p> <p>It is always better to have one high-limit credit card than to have different credit cards with lower limits. If it is just one card, then you simply need to track the expenses made with the concerned card and don’t have to worry about keeping a track of different expenses made on different cards. </p> <p>In the face of a financial emergency, a high credit limit certainly comes in handy. You can use the same to obtain loans for self, family members or even friends. You can even obtain personal loans if you have a high credit limit. </p> <p>Another benefit of a high credit limit are all the rewards that you are entitled to on the transactions you make.</p>"
    }, {
        id: "home-purchase",
        title: "How To Plan A Home Purchase?",
        content: "<p>Eight steps of financial planning that you must follow before you purchase your dream house.</p> <p><strong>Financial planning</strong> is quite critical, if you want to purchase a house. Follow the easy steps mentioned in this post to make the process of <strong>buying a house</strong> simpler. </p> <h5>1) Monthly household expenditure</h5> <p>For any middle-class household in India, buying a house is a major <strong>financial expenditure</strong>. Given that the real estate prices are on a steady incline, it is not possible to buy any property without some financial stretch. If you want to borrow money to purchase a house, then you must cut down on your monthly household expenditure between 25 to 40%. </p> <h5>2) Loan amount </h5> <p>At present, banks provide house loans worth 80% of the value of the property. If you want to borrow from a bank, then you need to be able to fund the remaining 20% on your own. This amount must not be raised through another loan or debt. Ideally, it is advisable that you contribute at least 40% of the down payment from your savings to reduce a financial strain. </p> <h5>3) Liabilities</h5> <p>It is important that you make a list of all the liabilities that you might face in the next six months. Liabilities can include tuition fee, insurance premium and so on. Ensure that you have sufficient funds to fulfill all these liabilities. </p> <h5>4) Existing loans or debts</h5> <p>You need to clear all the <strong>exiting loans</strong> or debts that you might have before you apply for a housing loan. It is highly unlikely that you will be able to pay off two loans simultaneously. You need to clear all the unsecured loans you might have to improve your CBIL score.</p> <h5>5) EMI reserve</h5> <p>It might be a small amount, but it is important that you set aside the amount necessary to pay off the EMIs on the loan for the next three months. The EMI reserve will come in handy in case of any unforeseeable circumstances that might lead to the non-payment of the EMI.</p> <h5>6) Budget</h5> <p>Most people tend to go a little overboard when furnishing and designing their house. Home furnishings or interiors are a major expense and you must fix a budget for the same.</p> <h5>7) Regular source of income </h5> <p>Financial planning is not possible if you don’t have a steady income. If you work in a sector that is susceptible to recession or any other economic conditions, then you might want to postpone the decision to purchase a house until you have a steady and regular income. </p> <h5>8) Emergency fund</h5> <p>Life is quite uncertain, and it is not humanly possible to foresee all expenditures that you can incur. There can be a contingency and you must not be caught unaware. You need to prepare for all sorts of emergencies. The best way to prepare for an emergency is to set aside an emergency fund. When you calculate your ability to repay a loan, take the contribution to the emergency fund into account as well. </p>"
    }, {
        id: "retirement-savings",
        title: "5 Ways To Boost Retirement Savings",
        content: "<p>Learn to save more for your retirement with five simple tips.</p> <h5>Start saving </h5> <p>If you want to boost your <strong>retirement fund</strong>, then you need to start <strong>saving</strong> early. All those in their mid-thirties to early forties need to save, if they want to retire by the age of 60 years. However, it is advisable that the younger crowd starts saving right now. All the work pressure that the youngsters face these days make it seem like they will be ready to retire by the age of 40. You need to save, but that doesn’t mean that you invest all your funds in a FD or a RD. Invest in equity mutual funds or share. Remember that you are young, and you can afford to take a risk or two, especially when it will help create a bigger retirement nest egg. </p> <h5>Insurance</h5> <p>A category that a lot of people make mistake in is that they tend to choose the wrong <strong>insurance policy</strong>. If you don’t select the proper insurance policy, it can cause a financial loss. Instead of wasting your funds on a policy that doesn’t meet your requirements, it is certainly better to invest in a policy that does meet your needs. If you want to retire early, then look for policies that will helpful for you. You also need to check the liquidity of the insurance policies. For instance, it is a good idea to select an insurance policy that will allow you to make withdrawals up until the age of 95. </p> <h5>Spend less </h5> <p>You can save more if you spend less. If you want to be able to afford an <strong>early retirement</strong>, then you need to cut down on your expenses. Instead of making frivolous purchases, invest your money in all those assets whose value will appreciate in the future. Instead of buying the latest gadgets and gizmos, investing in real estate is a sensible investment. The idea is to reduce your debts as much as you can before you retire. </p> <h5>Tax saving</h5> <p>A significant chunk of your income goes towards the payment of taxes. Don’t feel disheartened by it, because there are different ways in which you can reduce the tax payable. It is not just about tax saving, but it is about investing in those tools that will allow you to save tax in the future and increase your wealth. If you want to invest your money, then opt for one of the investments that is exempt from taxation like PPF or equity linked saving schemes. </p> <h5>Business after retirement</h5> <p>If you are of the opinion that your savings will not be sufficient after you retire, then think of different business avenues that are available to you after retirement as well. For instance, you can purchase a house or an apartment and then give the same away on rent. You can start a restaurant or use any of your other skills or talents to earn some extra money. After all, once you retire the one thing that you will never fall short of is time. </p>"
    }];


    console.log("$stateParams.name..............",$stateParams.name);
    $scope.blogData = 'stock-market';
    $scope.blogData = $stateParams.name;
})