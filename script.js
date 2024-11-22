function HostingPlan(name, price, features, support) {
  this.name = name;
  this.price = price;
  this.features = features;
  this.support = support;
}

var basicPlan = new HostingPlan(
  "Basic Plan",
  "$5/month",
  ["10GB Storage", "100GB Bandwidth", "1 Domain"],
  "Email Support"
);

var proPlan = new HostingPlan(
  "Pro Plan",
  "$15/month",
  ["50GB Storage", "500GB Bandwidth", "5 Domains"],
  "Email + Phone Support"
);

var businessPlan = new HostingPlan(
  "Business Plan",
  "$25/month",
  ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"],
  "Email + Phone + 24/7 Support"
);

var plans = [basicPlan, proPlan, businessPlan];

function displayPlans() {
  var plansContainer = document.getElementById("plans");

  for (let i = 0; i < plans.length; i++) {
    var plan = plans[i];

    var planCard = document.createElement("div");
    planCard.classList.add("plan-card");

    planCard.innerHTML = `
          <h3>${plan.name}</h3>
          <p class="price">${plan.price}</p>
          <p><strong>Features:</strong></p>
          <ul>
              ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <p><strong>Support:</strong> ${plan.support}</p>
          <button onclick="buyNow('${plan.name}', '${
      plan.price
    }')">Buy Now</button>
      `;

    plansContainer.appendChild(planCard);
  }
}

function buyNow(planName, planPrice) {
  var confirmationMessage = `You have selected the ${planName} for ${planPrice}.`;
  document.getElementById("confirmation").textContent = confirmationMessage;
}

displayPlans();
