(function () {
  "use strict";

  // Theme toggle
  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("dm2026-theme", next); } catch (e) {}
      
      var hljsTheme = document.getElementById('hljs-theme');
      if (hljsTheme) {
        hljsTheme.href = next === "dark" 
          ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css' 
          : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css';
      }
    });
  }


// Toast notification
  function showToast(message) {
    var toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(function(){ toast.className = "toast"; }, 2500);
  }
  window.showToast = showToast;

  // Mode toggle
  var modeBtn = document.getElementById("modeToggle");
  if (modeBtn) {
    // Initialize button icon based on current state
    var currentMode = document.documentElement.getAttribute("data-mode") || "concept";
    modeBtn.textContent = currentMode === "tech" ? "📖" : "🎓";
    
    modeBtn.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-mode") === "tech" ? "tech" : "concept";
      var next = current === "tech" ? "concept" : "tech";
      root.setAttribute("data-mode", next);
      try { localStorage.setItem("dm2026-mode", next); } catch (e) {}
      
      if (next === "tech") {
        modeBtn.textContent = "📖";
        showToast("Technical Notes Enabled");
      } else {
        modeBtn.textContent = "🎓";
        showToast("Intuitive Analogies Enabled");
      }
    });
  }

  // Mobile menu (chapters + on-page contents)
  var navToggle = document.getElementById("navToggle");
  var navPanel = document.getElementById("navPanel");
  if (navToggle && navPanel) {
    navToggle.addEventListener("click", function () {
      var isOpen = navPanel.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    navPanel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navPanel.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }


  // Highlight.js initialization
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var hljsStyle = document.createElement('link');
  hljsStyle.rel = 'stylesheet';
  hljsStyle.id = 'hljs-theme';
  hljsStyle.href = isDark 
    ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css' 
    : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css';
  document.head.appendChild(hljsStyle);

  var hljsScript = document.createElement('script');
  hljsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
  hljsScript.onload = function() {
    // Also load python language explicitly if needed, but core includes it.
    hljs.highlightAll();
  };
  document.head.appendChild(hljsScript);

  // Universal Modal Logic
  var openModalBtns = document.querySelectorAll('.open-modal');
  var closeBtns = document.querySelectorAll('.close-modal');

  openModalBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = btn.getAttribute('data-target');
      if (targetId) {
        var modal = document.getElementById(targetId);
        if (modal) modal.style.display = 'block';
      }
    });
  });

  closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var modal = e.target.closest('.modal');
      if (modal) modal.style.display = 'none';
    });
  });

  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });

  // Universal Expand/Collapse All Toolbar for .quiz-list and .drill-list
  document.querySelectorAll('.quiz-list, .drill-list').forEach(function(container) {
    var items = container.querySelectorAll('details');
    if (items.length < 2) return;
    
    var toolbar = document.createElement('div');
    toolbar.className = 'list-toggle-toolbar';
    toolbar.innerHTML = 
      '<button type="button" class="list-toggle-btn expand-btn" title="Expand all questions in this section">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>' +
        '<span>Expand All</span>' +
      '</button>' +
      '<button type="button" class="list-toggle-btn collapse-btn" title="Collapse all questions in this section">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg>' +
        '<span>Collapse All</span>' +
      '</button>';
      
    container.parentNode.insertBefore(toolbar, container);
    
    toolbar.querySelector('.expand-btn').addEventListener('click', function() {
      container.querySelectorAll('details').forEach(function(d) {
        d.open = true;
        d.setAttribute('open', '');
      });
      showToast('All items expanded');
    });
    
    toolbar.querySelector('.collapse-btn').addEventListener('click', function() {
      container.querySelectorAll('details').forEach(function(d) {
        d.open = false;
        d.removeAttribute('open');
      });
      showToast('All items collapsed');
    });
  });

  // ==========================================================================
  // PREMIUM €1,500 COURSE EXPERIENCE ENGINE (2026 EDITION)
  // ==========================================================================

  // Reading Progress Bar
  var progressBar = document.createElement("div");
  progressBar.className = "reading-progress-bar";
  document.body.appendChild(progressBar);
  window.addEventListener("scroll", function () {
    var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + "%";
  }, { passive: true });

  // Universal Tabs Engine
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".tab-btn");
    if (!btn) return;
    var container = btn.closest(".tabs-container");
    if (!container) return;
    var targetId = btn.getAttribute("data-tab");
    if (!targetId) return;

    container.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
    container.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });

    btn.classList.add("active");
    var panel = container.querySelector("#" + targetId);
    if (panel) panel.classList.add("active");
  });

  // Universal Interactive Quiz Engine
  document.addEventListener("click", function (e) {
    var opt = e.target.closest(".quiz-opt");
    if (!opt) return;
    var widget = opt.closest(".quiz-widget");
    if (!widget) return;
    var isCorrect = opt.getAttribute("data-correct") === "true";
    var feedback = widget.querySelector(".quiz-feedback");

    widget.querySelectorAll(".quiz-opt").forEach(function (o) {
      o.classList.remove("correct", "wrong");
    });

    if (isCorrect) {
      opt.classList.add("correct");
      if (feedback) {
        feedback.className = "quiz-feedback show-correct";
        feedback.innerHTML = "<strong>✅ Correct!</strong> " + (opt.getAttribute("data-reason") || "Spot on! You mastered this architectural trade-off.");
      }
    } else {
      opt.classList.add("wrong");
      var correctOpt = widget.querySelector('.quiz-opt[data-correct="true"]');
      if (correctOpt) correctOpt.classList.add("correct");
      if (feedback) {
        feedback.className = "quiz-feedback show-wrong";
        feedback.innerHTML = "<strong>❌ Incorrect.</strong> " + (opt.getAttribute("data-reason") || "Review the trade-off and try again.");
      }
    }
  });

  // SimUDuck Strategy Pattern Simulator Engine
  var simRunBtn = document.getElementById("simRunBtn");
  var simSwapBtn = document.getElementById("simSwapBtn");
  var simConsole = document.getElementById("simConsole");
  if (simRunBtn && simConsole) {
    simRunBtn.addEventListener("click", function () {
      var duckSelect = document.getElementById("simDuckSelect");
      var flySelect = document.getElementById("simFlySelect");
      var quackSelect = document.getElementById("simQuackSelect");
      var duckType = duckSelect ? duckSelect.value : "MallardDuck";
      var flyType = flySelect ? flySelect.value : "FlyWithWings";
      var quackType = quackSelect ? quackSelect.value : "Quack";

      var logs = [];
      logs.push(">> Instantiating Duck: " + duckType);
      logs.push(">> Strategy Injected: flyBehavior = new " + flyType + "()");
      logs.push(">> Strategy Injected: quackBehavior = new " + quackType + "()");
      logs.push("------------------------------------------------------------------");
      logs.push("[DUCK DISPLAY]  " + getDuckDisplay(duckType));
      logs.push("[FLY EXECUTE]   " + getFlyExecution(flyType));
      logs.push("[QUACK EXECUTE] " + getQuackExecution(quackType));
      logs.push("------------------------------------------------------------------");
      logs.push(">> Result: Clean runtime delegation. Zero subclass coupling!");

      simConsole.textContent = logs.join("\n");
    });

    if (simSwapBtn) {
      simSwapBtn.addEventListener("click", function () {
        var flySelect = document.getElementById("simFlySelect");
        if (flySelect) flySelect.value = "FlyRocketPowered";
        var duckSelect = document.getElementById("simDuckSelect");
        var quackSelect = document.getElementById("simQuackSelect");
        var duckType = duckSelect ? duckSelect.value : "ModelDuck";
        var quackType = quackSelect ? quackSelect.value : "Quack";

        var logs = [];
        logs.push("⚡ [RUNTIME HOT-SWAP TRIGGERED]");
        logs.push(">> Executing: duck.setFlyBehavior(new FlyRocketPowered())");
        logs.push(">> Context pointer re-bound: Target algorithm switched dynamically!");
        logs.push("------------------------------------------------------------------");
        logs.push("[DUCK DISPLAY]  " + getDuckDisplay(duckType));
        logs.push("[FLY EXECUTE]   🚀 WHOOOOSH! Mach 3 Jet Rocket Thrusters Ignited!");
        logs.push("[QUACK EXECUTE] " + getQuackExecution(quackType));
        logs.push("------------------------------------------------------------------");
        logs.push(">> Architectural Takeaway: Changed behavior in-flight without re-compilation or inheritance!");

        simConsole.textContent = logs.join("\n");
      });
    }
  }

  function getDuckDisplay(type) {
    switch (type) {
      case "MallardDuck": return "🦆 I am a genuine wild Mallard Duck with green plumage.";
      case "RedheadDuck": return "🦆 I am a North American Redhead diving duck.";
      case "RubberDuck": return "🐤 I am a yellow bath Rubber Duck. Made of 100% silicone.";
      case "DecoyDuck": return "🪵 I am an ornamental wooden Decoy Duck.";
      case "ModelDuck": return "🤖 I am a cybernetic Model Prototype Duck.";
      default: return "🦆 Generic Duck instance.";
    }
  }
  function getFlyExecution(type) {
    switch (type) {
      case "FlyWithWings": return "🪽 Flapping biological wings... Gliding gracefully at 30 km/h!";
      case "FlyNoWay": return "🚫 << Silence >> Cannot fly. Grounded or floating peacefully.";
      case "FlyRocketPowered": return "🚀 WHOOOOSH! Rocket thruster ignited! Flying at Mach 3!";
      default: return "Flying behavior executed.";
    }
  }
  function getQuackExecution(type) {
    switch (type) {
      case "Quack": return "🔊 QUACK! QUACK! Loud resonant duck call.";
      case "Squeak": return "🔉 Squeeeak! High-pitched vinyl squeak sound.";
      case "MuteQuack": return "🔇 << Absolute Silence >> Cannot produce sound.";
      default: return "Quack behavior executed.";
    }
  }

  // Universal Code Copy Button
  document.querySelectorAll(".code-container").forEach(function (box) {
    var header = box.querySelector(".code-header");
    var code = box.querySelector("code");
    if (!header || !code) return;

    var copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "copy-btn";
    copyBtn.style.cssText = "background:transparent;border:none;color:var(--text-muted);cursor:pointer;font-size:0.75rem;display:inline-flex;align-items:center;gap:0.3rem;";
    copyBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
    
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(code.innerText).then(function () {
        copyBtn.innerHTML = '✓ Copied!';
        setTimeout(function () {
          copyBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
        }, 2000);
      });
    });
    header.appendChild(copyBtn);
  });
})();
