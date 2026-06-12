const counters = document.querySelectorAll(".counter");
    let step = 0;

    function updateCounters() {
      counters.forEach((counter) => {
        const values = counter.dataset.values.split(",");
        const prefix = counter.dataset.prefix || "";
        const suffix = counter.dataset.suffix || "";
        const value = values[step % values.length];

        counter.style.opacity = "0.35";
        counter.style.transform = "translateY(-4px)";

        setTimeout(() => {
          counter.textContent = `${prefix}${value}${suffix}`;
          counter.style.opacity = "1";
          counter.style.transform = "translateY(0)";
        }, 180);
      });

      step++;
    }

    counters.forEach((counter) => {
      counter.style.transition = "opacity 0.25s ease, transform 0.25s ease";
    });

    setInterval(updateCounters, 2300);

    const solutionStatuses = document.querySelectorAll(".solution-status");
    let solutionStep = 0;

    function updateSolutionStatuses() {
      solutionStatuses.forEach((status, index) => {
        const values = status.dataset.values.split(",");
        const nextValue = values[(solutionStep + index) % values.length];

        status.classList.add("is-changing");

        setTimeout(() => {
          status.textContent = nextValue;
          status.classList.remove("is-changing");
        }, 220);
      });

      solutionStep++;
    }

    setInterval(updateSolutionStatuses, 2600);