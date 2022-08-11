---
sidebar_position: 1
---

# About OpenLineage

OpenLineage is an open framework for data lineage collection and analysis. At its core is an extensible specification that systems can use to interoperate with lineage metadata.

### Design

OpenLineage is an _Open Standard_ for lineage metadata collection designed to record metadata for a _job_ in execution.

The standard defines a generic model of _dataset_, _job_, and _run_ entities uniquely identified using consistent naming strategies. The core model is highly extensible via facets. A **facet** is user-defined metadata and enables entity enrichment. We encourage you to familiarize yourself with the core model below:

![image](./model.svg)


### How OpenLineage Benefits the Ecosystem

Below, we illustrate the challenges of collecting lineage metadata from multiple sources, schedulers and/or data processing frameworks. We then outline the design benefits of defining an _Open Standard_ for lineage metadata collection.

#### BEFORE:

![image](./before-ol.svg)

* Each project has to instrument it's own custom metadata collection integration, therefore duplicating efforts.
* Integrations are external and can break with new versions of the underlying scheduler and/or data processing framework, requiring projects to ensure _backwards_ compatibility.

#### WITH OPENLINEAGE:

![image](./with-ol.svg)

* Integration efforts are shared _across_ projects.
* Integrations can be _pushed_ to the underlying scheduler and/or data processing framework; no need to play catch up and ensure compatibility!

