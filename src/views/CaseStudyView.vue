<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageIntro from '../components/PageIntro.vue'
import editorImage from '../assets/img/speedlab/editor.png'
import runImage from '../assets/img/speedlab/run.png'

const repositories = [
  {
    name: 'agentic-data-analyst',
    group: 'Analytics agents',
    description: 'Guarded agentic analytics: natural-language questions become dbt-grounded plans, a typed intermediate representation and validated PySpark execution — never exec().',
    stack: ['Python', 'PySpark', 'dbt'],
    license: 'MIT',
  },
  {
    name: 'spark-data-quality',
    group: 'Data quality',
    description: 'Typed, Spark-native data-quality validation and profiling that combines compatible checks into a single aggregation pass.',
    stack: ['Python', 'PySpark', 'Pydantic'],
    license: 'MIT',
  },
  {
    name: 'experimentation-toolkit',
    group: 'Statistics',
    description: 'A typed library for A/B experiments covering inference, sample-ratio-mismatch diagnostics, power analysis and multiple-testing correction.',
    stack: ['Python', 'SciPy', 'Pydantic'],
    license: 'MIT',
  },
  {
    name: 'spark-asammdf',
    group: 'Automotive data',
    description: 'An Apache Spark DataSource V2 connector for distributed analysis of ASAM MDF4 vehicle measurement data, with filter pushdown into the file.',
    stack: ['Scala', 'Apache Spark', 'Python'],
    license: 'MIT',
  },
  {
    name: 'retro-speedlab-core',
    group: 'Retro Speedlab',
    description: 'The reinforcement-learning engine behind the platform: recurrent PPO with random network distillation, vectorized environments, resumable checkpoints and live telemetry.',
    stack: ['Python', 'PyTorch', 'Stable Retro'],
    license: 'GPL-3.0',
  },
  {
    name: 'retro-speedlab',
    group: 'Retro Speedlab',
    description: 'A Cookiecutter scaffold that generates reproducible Stable Retro training projects, complete with game wrapper, reward logic, tests and CI.',
    stack: ['Python', 'Cookiecutter', 'Poetry'],
    license: 'GPL-3.0',
  },
]
</script>

<template>
  <div>
    <PageIntro
      title="Public projects,"
      accent="shown in full."
      copy="Six open-source repositories and one live AI platform—inspectable evidence of how I approach data engineering, machine learning, delivery and operations."
    >
      <template #eyebrow>Public case studies</template>
    </PageIntro>

    <section class="case-repo-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">Open-source repositories</p>
            <h2>Client work stays private.<br />This code does not.</h2>
          </div>
          <p>
            Focused libraries drawn from recurring client problems—guarded analytics agents, data quality,
            experimentation and automotive measurement data—alongside the engine and scaffold behind Retro Speedlab.
          </p>
        </div>

        <div class="case-repo-grid">
          <article
            v-for="repository in repositories"
            :key="repository.name"
            class="case-repo"
            :class="{ 'is-speedlab': repository.group === 'Retro Speedlab' }"
          >
            <RouterLink
              v-if="repository.group === 'Retro Speedlab'"
              class="case-repo-group"
              :to="{ hash: '#retro-speedlab' }"
            >
              Retro Speedlab · see below ↓
            </RouterLink>
            <span v-else class="case-repo-group">{{ repository.group }}</span>
            <h3>
              <a
                :href="`https://github.com/datenwissenschaften/${repository.name}`"
                target="_blank"
                rel="noopener noreferrer"
              >{{ repository.name }} <span aria-hidden="true">↗</span></a>
            </h3>
            <p>{{ repository.description }}</p>
            <div class="case-repo-meta">
              <span>{{ repository.stack.join(' · ') }}</span>
              <span>{{ repository.license }}</span>
            </div>
          </article>
        </div>

        <div class="case-link-row">
          <a
            class="text-link"
            href="https://github.com/datenwissenschaften"
            target="_blank"
            rel="noopener noreferrer"
          >View all repositories on GitHub ↗</a>
        </div>
      </div>
    </section>

    <section id="retro-speedlab" class="wrap case-overview">
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
          <ol class="system-stages">
            <li style="--stage: 0">
              <div class="stage-top">
                <span class="stage-number">01</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Design</strong>
              <small>Visual training builder</small>
              <em>Schema ready</em>
            </li>
            <li style="--stage: 1">
              <div class="stage-top">
                <span class="stage-number">02</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Train</strong>
              <small>Python · CUDA · Podman</small>
              <em>Model learning</em>
            </li>
            <li class="decision-stage" style="--stage: 2">
              <div class="stage-top">
                <span class="stage-number">03</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Validate</strong>
              <small>stable-retro · FFmpeg</small>
              <div class="decision-gate" aria-label="Quality gate: pass to publish, otherwise retry training">
                <span>pass → publish</span><span>fail ↺ retry</span>
              </div>
            </li>
            <li style="--stage: 3">
              <div class="stage-top">
                <span class="stage-number">04</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Publish</strong>
              <small>FastAPI · PocketBase · Pocketflow</small>
              <em>Release live</em>
            </li>
            <li style="--stage: 4">
              <div class="stage-top">
                <span class="stage-number">05</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Observe</strong>
              <small>Umami · Bugsink · Live Metrics</small>
              <em>Feedback loop</em>
            </li>
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
