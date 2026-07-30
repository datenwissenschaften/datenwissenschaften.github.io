<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import editorImage from '../assets/img/speedlab/editor.png'
import runImage from '../assets/img/speedlab/run.png'
</script>

<template>
  <div>
    <PageIntro
      index="05"
      title="A public project,"
      accent="shown in full."
      copy="Retro Speedlab is a working AI platform built in the open—a practical view of how I approach product design, machine learning, delivery and operations."
    >
      <template #eyebrow>Public case study</template>
    </PageIntro>

    <section class="wrap case-overview">
      <aside class="case-facts">
        <p class="eyebrow">At a glance</p>
        <dl>
          <div><dt>Project</dt><dd>Retro Speedlab</dd></div>
          <div><dt>Type</dt><dd>Independent R&D platform</dd></div>
          <div><dt>Focus</dt><dd>AI training and benchmarking</dd></div>
          <div><dt>Scope</dt><dd>Product, ML and operations</dd></div>
          <div><dt>Status</dt><dd><span class="status-dot" /> Live and evolving</dd></div>
        </dl>
      </aside>

      <div class="case-narrative">
        <p class="eyebrow">Why it exists</p>
        <h2>Useful evidence, without breaking trust.</h2>
        <p class="case-lead">
          Much of my commercial work sits inside client environments and is protected by non-disclosure agreements.
          Retro Speedlab offers a modest, transparent alternative: a real system that can be inspected, used and
          challenged in public.
        </p>
        <p>
          The project explores AI models that learn to complete retro games quickly. The playful subject keeps the
          experiment approachable; the engineering behind it is serious. Training jobs are created through a visual
          workflow, executed in isolated GPU-ready environments, validated before publication and presented through
          a live leaderboard and continuous stream.
        </p>
        <p>
          It is not intended to stand in for the scale or constraints of an enterprise engagement. It simply makes
          the working habits visible: narrow the problem, build the whole path, automate repeatable operations,
          measure what is running and keep ownership of code and data.
        </p>
        <div class="case-link-row">
          <a
            class="button button-primary"
            href="https://speedlab.datenwissenschaften.com/"
            target="_blank"
            rel="noopener noreferrer"
          >Visit Retro Speedlab ↗</a>
          <a
            class="text-link"
            href="https://speedlab.datenwissenschaften.com/tech-stack"
            target="_blank"
            rel="noopener noreferrer"
          >Inspect the live tech stack ↗</a>
        </div>
      </div>
    </section>

    <section class="wrap case-gallery">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Inside the product</p>
          <h2>Designed to be used,<br />not merely demonstrated.</h2>
        </div>
        <p>
          The public interface connects model design with observable results. These are live product views rather
          than presentation mock-ups.
        </p>
      </div>
      <div class="case-gallery-grid">
        <figure>
          <div class="case-gallery-image">
            <img
              :src="editorImage"
              alt="Retro Speedlab visual editor for arranging and configuring machine-learning states"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>01 / Visual builder</span>
            <p>State-based learning logic can be arranged, configured and reviewed before a training project is generated.</p>
          </figcaption>
        </figure>
        <figure>
          <div class="case-gallery-image">
            <img
              :src="runImage"
              alt="Retro Speedlab verified run page with run metadata and video replay"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>02 / Verifiable result</span>
            <p>Completed runs retain their timing, metadata and video evidence so results can be inspected rather than taken on trust.</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="case-system-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">End-to-end system</p>
            <h2>From an idea<br />to an observed result.</h2>
          </div>
          <p>
            Each stage is connected, automated and independently inspectable. The architecture favours portable,
            open components over unnecessary platform dependency.
          </p>
        </div>

        <div class="speedlab-system" aria-label="Retro Speedlab workflow from design to observation">
          <div class="system-head">
            <span>Retro Speedlab / production workflow</span>
            <span><i /> Operational</span>
          </div>
          <ol>
            <li><span>01</span><strong>Design</strong><small>Visual training builder</small></li>
            <li><span>02</span><strong>Train</strong><small>Python · CUDA · Podman</small></li>
            <li><span>03</span><strong>Validate</strong><small>stable-retro · FFmpeg</small></li>
            <li><span>04</span><strong>Publish</strong><small>FastAPI · PocketBase · Vue</small></li>
            <li><span>05</span><strong>Observe</strong><small>Umami · Bugsink · live metrics</small></li>
          </ol>
          <div class="system-foot">
            <span>Self-hosted source & CI/CD</span>
            <span>Automated delivery</span>
            <span>Human-readable outcomes</span>
          </div>
        </div>
      </div>
    </section>

    <section class="wrap case-evidence">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">What it demonstrates</p>
          <h2>Small enough to inspect.<br />Complete enough to be useful.</h2>
        </div>
        <p>
          The value of this case study is not a polished concept deck. It is the connection between product decisions,
          model execution and day-to-day operation.
        </p>
      </div>

      <div class="case-evidence-grid">
        <article>
          <span>01</span>
          <h3>Product thinking</h3>
          <p>A public experience for discovering games, creating training projects and comparing verified runs.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Machine learning workflow</h3>
          <p>Generated Python projects, scheduled training and CUDA-ready workloads running in isolated containers.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Independent validation</h3>
          <p>Run verification with stable-retro and FFmpeg before results become eligible for the leaderboard.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Full-stack delivery</h3>
          <p>A Vue interface connected to FastAPI, PocketBase and several focused Python services.</p>
        </article>
        <article>
          <span>05</span>
          <h3>Operational discipline</h3>
          <p>Automated checks and rollout through Gitea Actions, with self-hosted analytics and error monitoring.</p>
        </article>
        <article>
          <span>06</span>
          <h3>Pragmatic AI</h3>
          <p>Local Ollama-powered assistants support the site and stream where they add value, without becoming the product.</p>
        </article>
      </div>
    </section>

    <section class="case-closing">
      <div class="wrap">
        <p class="eyebrow">Explore the evidence</p>
        <h2>See the system,<br /><em>not just the summary.</em></h2>
        <p>
          The live tech-stack page lists each service, its responsibilities, current release information,
          delivery pipeline and operational metrics.
        </p>
        <div class="case-link-row">
          <a
            class="button case-button-light"
            href="https://speedlab.datenwissenschaften.com/tech-stack"
            target="_blank"
            rel="noopener noreferrer"
          >Open the technical overview ↗</a>
          <a
            class="case-plain-link"
            href="https://github.com/datenwissenschaften/retro-speedlab"
            target="_blank"
            rel="noopener noreferrer"
          >View the public repository ↗</a>
        </div>
      </div>
    </section>
  </div>
</template>
