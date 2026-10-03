<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageIntro from '../components/PageIntro.vue'
import labImage from '../assets/img/speedlab/lab.png'
import methodImage from '../assets/img/speedlab/method.png'

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
    description: 'The engine behind the lab: the Laya decision model reads the game as text, picks named moves and learns from rewards with group-relative policy gradients on a consumer GPU.',
    stack: ['Python', 'PyTorch', 'Laya'],
    license: 'GPL-3.0',
  },
  {
    name: 'retro-speedlab',
    group: 'Retro Speedlab',
    description: 'A Cookiecutter template for game packages: a skeleton that knows nothing about its game until scheduled Claude Code lab runs grow it.',
    stack: ['Python', 'Cookiecutter', 'Claude Code'],
    license: 'GPL-3.0',
  },
]
</script>

<template>
  <div>
    <PageIntro
      title="Public projects,"
      accent="shown in full."
      copy="Six open-source repositories and one live AI research lab—inspectable evidence of how I approach data engineering, machine learning, delivery and operations."
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
            experimentation and automotive measurement data—alongside the engine and template behind Retro Speedlab.
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
          <div><dt>Type</dt><dd>Independent research lab</dd></div>
          <div><dt>Focus</dt><dd>Self-learning game agents</dd></div>
          <div><dt>Scope</dt><dd>ML, agents and operations</dd></div>
          <div><dt>Status</dt><dd><span class="status-dot" /> Live and learning</dd></div>
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
          The lab asks a focused question: how far can one small decision model get through a retro game on its own?
          Laya reads the game as text, chooses between named moves and learns from rewards, around the clock on an
          everyday desktop with a GPU from 2018. Several times a day a scheduled Claude Code lab run measures the
          progress, verifies new facts in the emulator, extends the game package, tests and deploys it, and writes a
          lab report. The playful subject keeps the experiment approachable; the engineering behind it is serious.
        </p>
        <p>
          Everything happens in public: the training streams live on Twitch, and every lab report and every beaten
          level is published on the lab's website.
        </p>
        <p>
          It is not intended to stand in for the scale or constraints of an enterprise engagement. It simply makes
          the working habits visible: narrow the problem, build the whole path, automate repeatable operations,
          measure what is running and keep ownership of code and data.
        </p>
        <div class="case-link-row">
          <a
            class="button button-primary"
            href="https://www.retrospeedlab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >Visit the lab ↗</a>
          <a
            class="text-link"
            href="https://www.retrospeedlab.com/tech-stack"
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
          The website is fed by the training itself: the live stream, the lab reports and the method behind them.
          These are live views of the lab rather than presentation mock-ups.
        </p>
      </div>
      <div class="case-gallery-grid">
        <figure>
          <div class="case-gallery-image">
            <img
              :src="labImage"
              alt="Retro Speedlab home page with the live training stream, the game on the bench and the latest lab report"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>01 / Live lab</span>
            <p>The live stream shows every decision Laya makes, next to the game on the bench and the latest lab report.</p>
          </figcaption>
        </figure>
        <figure>
          <div class="case-gallery-image">
            <img
              :src="methodImage"
              alt="Retro Speedlab method page explaining in six steps how Laya plays and learns"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>02 / Open method</span>
            <p>Six steps explain how Laya plays and learns, and what an everyday desktop can and cannot do.</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="case-system-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">End-to-end system</p>
            <h2>From game memory<br />to a learned move.</h2>
          </div>
          <p>
            Each stage is connected, automated and independently inspectable. The lab loop runs unattended and favours
            portable, open components over unnecessary platform dependency.
          </p>
        </div>

        <div class="speedlab-system" aria-label="Retro Speedlab lab loop from game memory to a published result">
          <div class="system-head">
            <span>Retro Speedlab / lab loop</span>
            <span><i /> Operational</span>
          </div>
          <ol class="system-stages">
            <li style="--stage: 0">
              <div class="stage-top">
                <span class="stage-number">01</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Describe</strong>
              <small>Game package · RAM as text</small>
              <em>State described</em>
            </li>
            <li style="--stage: 1">
              <div class="stage-top">
                <span class="stage-number">02</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Decide</strong>
              <small>Laya · named actions</small>
              <em>Move chosen</em>
            </li>
            <li style="--stage: 2">
              <div class="stage-top">
                <span class="stage-number">03</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Learn</strong>
              <small>PyTorch · 8-bit AdamW · RTX 2070</small>
              <em>Weights updated</em>
            </li>
            <li class="decision-stage" style="--stage: 3">
              <div class="stage-top">
                <span class="stage-number">04</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Improve</strong>
              <small>Claude Code · pytest · Dokku</small>
              <div class="decision-gate" aria-label="Quality gate: verified changes deploy, otherwise they are reverted">
                <span>pass → deploy</span><span>fail ↺ revert</span>
              </div>
            </li>
            <li style="--stage: 4">
              <div class="stage-top">
                <span class="stage-number">05</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Publish</strong>
              <small>FastAPI · PostgreSQL · Twitch</small>
              <em>Live in public</em>
            </li>
          </ol>
          <div class="system-foot">
            <span>Self-hosted on Dokku</span>
            <span>Unattended around the clock</span>
            <span>Every step reported</span>
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
          The value of this case study is not a polished concept deck. It is the connection between a research
          question, model execution and day-to-day operation.
        </p>
      </div>

      <div class="case-evidence-grid">
        <article>
          <span>01</span>
          <h3>Research framing</h3>
          <p>One narrow question, answered in public: how far a small decision model gets through a game on consumer hardware.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Reinforcement learning</h3>
          <p>Group-relative policy gradients with a measured-KL trust region fine-tune every weight of Laya on an 8 GB GPU.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Agentic engineering</h3>
          <p>Scheduled Claude Code lab runs verify facts in the emulator before they change the game, guarded by tests and narrow permissions.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Full-stack delivery</h3>
          <p>A Vue website and a FastAPI service on PostgreSQL, fed directly by the training: beaten levels, videos and lab reports.</p>
        </article>
        <article>
          <span>05</span>
          <h3>Operational discipline</h3>
          <p>Dokku deployments, an engine published on PyPI, self-hosted analytics and error monitoring, and live metrics per component.</p>
        </article>
        <article>
          <span>06</span>
          <h3>Pragmatic AI</h3>
          <p>Free language models write the short lab reports for viewers; every move in the game stays with Laya.</p>
        </article>
      </div>
    </section>

    <section class="case-closing">
      <div class="wrap">
        <p class="eyebrow">Explore the evidence</p>
        <h2>See the system,<br /><em>not just the summary.</em></h2>
        <p>
          The live tech-stack page lists each component, its tools and live metrics: visitors, issues, commits,
          lab runs and the stream's audience.
        </p>
        <div class="case-link-row">
          <a
            class="button case-button-light"
            href="https://www.retrospeedlab.com/tech-stack"
            target="_blank"
            rel="noopener noreferrer"
          >Open the technical overview ↗</a>
          <a
            class="case-plain-link"
            href="https://github.com/datenwissenschaften/retro-speedlab-core"
            target="_blank"
            rel="noopener noreferrer"
          >View the engine on GitHub ↗</a>
        </div>
      </div>
    </section>
  </div>
</template>
