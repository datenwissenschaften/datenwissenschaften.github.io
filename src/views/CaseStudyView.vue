<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageIntro from '../components/PageIntro.vue'
import labImage from '../assets/img/speedlab/lab.png'
import methodImage from '../assets/img/speedlab/method.png'

const disciplines = [
  {
    label: 'retro-speedlab-core',
    title: 'Search and reinforcement learning',
    lead: 'Finding the fastest inputs through a NES game from power-on, on a desktop from 2017.',
    concepts: [
      { name: 'Game model.', text: 'A small game package reads the emulator RAM and splits the game into states, so the engine knows where each level starts and ends.' },
      { name: 'Exploration search.', text: 'Go-Explore-style frontier search and a tree search branch from emulator save states in parallel emulators; every level is loaded straight into memory and practised in turns.' },
      { name: 'Learned guidance.', text: 'A Stable-Baselines3 PPO policy on Gymnasium environments learns on the GPU which buttons work and guides the search.' },
      { name: 'Learning from video.', text: 'A small CNN reads a reference tool-assisted-speedrun video level by level and turns it into a route map, frames left per map cell, that steers the search and its checkpoints.' },
      { name: 'Verification first.', text: 'A new part counts only once the movie replays frame-exact from power-on; then every part is trimmed for fewer frames.' },
    ],
    value: 'Search, learning and strict verification that optimise a measurable outcome on hardware an organisation already owns, with every experiment tracked in Weights & Biases.',
  },
  {
    label: 'Claude Code · Agent SDK',
    title: 'Agentic engineering',
    lead: 'Turning Claude into a dependable, unattended engineering process, with evaluation and observability built in.',
    concepts: [
      { name: 'Multi-agent lab runs.', text: 'When the search is stuck, a scheduled Claude Code lead agent delegates to subagents that probe the game, research, build and verify, and improves the game package: states, rewards and RAM memory.' },
      { name: 'Hard gates.', text: 'A change ships only when its tests pass and the current movie still replays from power-on.' },
      { name: 'Observability.', text: 'Every lab run is traced in Langfuse via OpenTelemetry: a session per run, a trace per round, subagents nested.' },
      { name: 'Evaluation.', text: 'Each run is scored on whether the search progressed afterwards, and a critic reviews the lab reports and writes lessons for the next run.' },
      { name: 'Autonomous maintenance.', text: 'A second agent, built with the Claude Agent SDK, runs every six hours: it reads Bugsink errors, lab reports and the live run, fixes the most important problem with a test, merges and deploys or opens a pull request.' },
    ],
    value: 'Agents that act on real systems within defined boundaries, measured on outcomes, with a trace and an audit trail for every change they make.',
  },
]

const repositories = [
  {
    name: 'agentic-data-analyst',
    group: 'Analytics agents',
    description: 'Chat with your data: Claude writes read-only DuckDB SQL, a second agent reviews it, and deterministic guardrails and cost budgets bound every query — answers, tables and charts in Chainlit.',
    stack: ['Python', 'Claude', 'DuckDB'],
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
    description: 'The engine behind the lab: Go-Explore and tree search over emulator save states, guided by a PPO policy and a route map read from a TAS video, with every run verified frame-exact from power-on.',
    stack: ['Python', 'stable-retro', 'Stable-Baselines3'],
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
          <div><dt>Focus</dt><dd>AI speedrunning, verified frame-exact</dd></div>
          <div><dt>Disciplines</dt><dd>Search and reinforcement learning · Agentic engineering</dd></div>
          <div><dt>Status</dt><dd><span class="status-dot" /> Live on Twitch, around the clock</dd></div>
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
          The lab asks a focused question: how fast can an AI finish Snake Rattle 'n Roll, warpless, from power-on?
          Answering it combines two disciplines that organisations increasingly need together. The engine searches
          over emulator save states in parallel emulators, guided by a PPO policy that learns which buttons work and
          by a route map read from a reference tool-assisted-speedrun video. A new part of the run counts only once
          it replays frame-exact from power-on, all on a 2017 desktop with an RTX 2070. When the search gets stuck,
          a scheduled team of Claude Code agents improves the game package, and a second Claude agent keeps the
          platform itself running.
        </p>
        <p>
          The playful subject keeps the experiment approachable; the engineering behind it is the same I apply to
          client systems.
        </p>
        <p>
          Everything happens in public: the run streams live on Twitch, and every lab report and every record is
          published on the lab's website.
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
          >Read the page for engineers ↗</a>
        </div>
      </div>
    </section>

    <section class="wrap case-disciplines">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Two disciplines, one system</p>
          <h2>A search that learns.<br />Agents that engineer.</h2>
        </div>
        <p>
          Search and reinforcement learning find the fastest run; agentic engineering keeps improving the system
          around it. The lab practises both in production, under the constraints clients face: limited hardware,
          unattended operation and the need to verify every result.
        </p>
      </div>

      <div class="case-discipline-grid">
        <article v-for="discipline in disciplines" :key="discipline.title">
          <span>{{ discipline.label }}</span>
          <h3>{{ discipline.title }}</h3>
          <p class="case-discipline-lead">{{ discipline.lead }}</p>
          <ul>
            <li v-for="concept in discipline.concepts" :key="concept.name">
              <strong>{{ concept.name }}</strong> {{ concept.text }}
            </li>
          </ul>
          <p class="case-discipline-value"><strong>For clients:</strong> {{ discipline.value }}</p>
        </article>
      </div>
    </section>

    <section class="wrap case-gallery">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Inside the product</p>
          <h2>Designed to be used,<br />not merely demonstrated.</h2>
        </div>
        <p>
          The website is fed by the run itself: the live stream, the lab reports and the method behind them.
          These are live views of the lab rather than presentation mock-ups.
        </p>
      </div>
      <div class="case-gallery-grid">
        <figure>
          <div class="case-gallery-image">
            <img
              :src="labImage"
              alt="Retro Speedlab lab page showing what the team of Claude agents did and how often the search moved on"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>01 / The lab</span>
            <p>The lab page reports what the Claude agents did: lab runs, shipped changes, subagent tasks and how often the search moved on afterwards.</p>
          </figcaption>
        </figure>
        <figure>
          <div class="case-gallery-image">
            <img
              :src="methodImage"
              alt="Retro Speedlab How it works page explaining in five steps how the AI speedruns"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>02 / Open method</span>
            <p>Five steps explain how the search explores, the policy learns, the lab proposes, the verifier gates and the proven run ships.</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="case-system-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">End-to-end system</p>
            <h2>From game memory<br />to a proven run.</h2>
          </div>
          <p>
            Each stage is connected, automated and independently inspectable. Flyte workflows run the speedrun and the
            lab unattended, on portable, open components rather than unnecessary platform dependency.
          </p>
        </div>

        <div class="speedlab-system" aria-label="Retro Speedlab loop from game memory to a proven, published run">
          <div class="system-head">
            <span>Retro Speedlab / speedrun loop</span>
            <span><i /> Operational</span>
          </div>
          <ol class="system-stages">
            <li style="--stage: 0">
              <div class="stage-top">
                <span class="stage-number">01</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Explore</strong>
              <small>stable-retro · save states · Go-Explore</small>
              <em>Frontier grown</em>
            </li>
            <li style="--stage: 1">
              <div class="stage-top">
                <span class="stage-number">02</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Guide</strong>
              <small>PPO · TAS route map · RTX 2070</small>
              <em>Search steered</em>
            </li>
            <li style="--stage: 2">
              <div class="stage-top">
                <span class="stage-number">03</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Verify</strong>
              <small>Frame-exact replay from power-on</small>
              <em>Run proven</em>
            </li>
            <li class="decision-stage" style="--stage: 3">
              <div class="stage-top">
                <span class="stage-number">04</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Improve</strong>
              <small>Claude Code · Langfuse · Dokku</small>
              <div class="decision-gate" aria-label="Quality gate: changes deploy only when tests pass and the run still replays">
                <span>pass → deploy</span><span>fail ↺ reject</span>
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
            <span>Every agent run traced</span>
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
          question, search and learning, autonomous agents and day-to-day operation.
        </p>
      </div>

      <div class="case-evidence-grid">
        <article>
          <span>01</span>
          <h3>Research framing</h3>
          <p>One narrow question, answered in public: how fast an AI finishes a NES game from power-on on a 2017 desktop.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Measurable outcomes</h3>
          <p>Every release is tracked in Weights &amp; Biases—levels beaten, frames saved, hours since progress—and every lab run is scored on whether the search moved on.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Governed autonomy</h3>
          <p>Agents work unattended behind explicit gates: tests must pass, the movie must still replay from power-on, and every run leaves a trace and a report.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Full-stack delivery</h3>
          <p>A Vue 3 website and stream overlay on FastAPI and PostgreSQL, Twitch chat commands with “Ask the AI”, and a Discord bot that posts records and lab runs.</p>
        </article>
        <article>
          <span>05</span>
          <h3>Operational discipline</h3>
          <p>Docker and Dokku on a Hetzner server and a home server, self-hosted Bugsink and Umami, and ruff and pyright strict in CI.</p>
        </article>
        <article>
          <span>06</span>
          <h3>Pragmatic AI</h3>
          <p>Claude writes the stream commentary and lab report cards; every input in the run comes from search and a learned policy, proven by replay.</p>
        </article>
      </div>
    </section>

    <section class="case-closing">
      <div class="wrap">
        <p class="eyebrow">Explore the evidence</p>
        <h2>See the system,<br /><em>not just the summary.</em></h2>
        <p>
          The page for engineers lists each component, from the desktop at home to the website, and how well the
          agents work, measured over every lab run.
        </p>
        <div class="case-link-row">
          <a
            class="button case-button-light"
            href="https://www.retrospeedlab.com/tech-stack"
            target="_blank"
            rel="noopener noreferrer"
          >Open the page for engineers ↗</a>
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
