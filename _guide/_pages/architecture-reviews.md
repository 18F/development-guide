---
title: Architecture Reviews
sidenav: approach
sticky_sidenav: true
---

Maintainable technology projects require handoffs between developers, and with new teammates comes fresh perspectives. Building a [transparent and remote-friendly
workplace](https://18f.gsa.gov/2015/10/15/best-practices-for-distributed-teams/) is a great start to assist in knowledge transfer, as well as keeping projects as simple and obvious as possible and documenting key decisions. 

## Simplicity

We’ve done two projects exploring different aspects of simplicity — first, the [DATA Act Pilot: Simplicity is Key]({{site.baseurl}}/architecture-reviews/data-act-pilot) (2016) project explored the ideas of:

- Building for a least common denominator (CSVs) gave the project reach (more users could participate) and reduced code complexity. 
- Pulling out validation rules into a separate, easy-to-modify format made the product flexible and simple to maintain. 

The second explores the idea of simplifying acquisitions in [Micro-purchase: Do one thing well]({{site.baseurl}}/architecture-reviews/micro-purchase) (2016) by using code boundaries in projects to define lines between micro-purchases of developer time. 

## Documenting key decisions

Some 18F projects have found success using [Architecture Decision Records](https://adr.github.io/) to capture key decisions and the context to which they were made, with the goal of allowing future project developers to know if a decision should be revisited or not. The decision records are typically stored in the repository alongside the code, using [this template](https://github.com/joelparkerhenderson/architecture_decision_record/blob/master/adr_template_by_michael_nygard.md). For example:

- [18F/piipan](https://github.com/18F/piipan/tree/main/docs/adr)
- [HHS/Head-Start-TTADP](https://github.com/HHS/Head-Start-TTADP/tree/main/docs/adr)
- [HHS/TANF-app](https://github.com/HHS/TANF-app/tree/main/docs/Architecture%20Decision%20Record)
- [transcom/mymove](https://github.com/transcom/mymove/tree/master/docs/adr)
