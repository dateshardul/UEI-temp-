document.addEventListener("DOMContentLoaded", function () {
    // Get references to dashboard divs
    const recruitDashboard = document.getElementById("recruit-dashboard");
    const onboardDashboard = document.getElementById("onboard-dashboard");
    const performDashboard = document.getElementById("perform-dashboard");

    // Get references to navigation links
    const recruitLink = document.getElementById("recruit-link");
    const onboardLink = document.getElementById("onboard-link");
    const performLink = document.getElementById("perform-link");

    // Function to show one dashboard and hide others
    function showDashboard(dashboard) {
        recruitDashboard.style.display = "none";
        onboardDashboard.style.display = "none";
        performDashboard.style.display = "none";

        dashboard.style.display = "block";
    }

    // Initially show the Recruit dashboard
    showDashboard(recruitDashboard);

    // Event listeners for navigation links
    recruitLink.addEventListener("click", function () {
        showDashboard(recruitDashboard);
    });

    onboardLink.addEventListener("click", function () {
        showDashboard(onboardDashboard);
    });

    performLink.addEventListener("click", function () {
        showDashboard(performDashboard);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const viewCandidatesButton = document.getElementById("view-candidates-button");
    const candidateTable = document.getElementById("candidate-table");

    viewCandidatesButton.addEventListener("click", function () {
        // Toggle display between 'none' and 'block'
        if (candidateTable.style.display === "none" || candidateTable.style.display === "") {
            candidateTable.style.display = "block";
        } else {
            candidateTable.style.display = "none";
        }
    });
});

document.getElementById("access-training-button").addEventListener("click", function () {
    let trainingSection = document.getElementById("training-modules-section");
    trainingSection.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    const trainingButton = document.getElementById("access-training-button");
    const trainingSection = document.getElementById("training-modules-section");

    trainingButton.addEventListener("click", function () {
        // Toggle the visibility of the training section
        if (trainingSection.style.display === "none" || trainingSection.style.display === "") {
            trainingSection.style.display = "block";
        } else {
            trainingSection.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const addGoalButton = document.getElementById("add-new-goal-button");
    const goalForm = document.getElementById("add-goal-form");

    addGoalButton.addEventListener("click", function () {
        // Toggle the form visibility
        if (goalForm.style.display === "none" || goalForm.style.display === "") {
            goalForm.style.display = "block";
        } else {
            goalForm.style.display = "none";
        }
    });
});
