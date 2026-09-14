// ========================================
// THE GRADUATION ARCHIVE
// CHAPTER NAVIGATION SYSTEM
// ========================================


/* ========================================
   CHAPTER CONFIGURATION
======================================== */

const chapterIds = [
    "opening",
    "origin",
    "chapter2024",
    "aib",
    "sempro",
    "sidang",
    "wisuda",
    "final-message",
    "final-joke"
];

let currentChapter = 0;

const chapters = chapterIds.map(id =>
    document.getElementById(id)
);

const chapterIndicator =
    document.getElementById("chapterCurrent");


/* ========================================
   CHAPTER INDICATOR
======================================== */

function updateChapterIndicator() {

    if (!chapterIndicator) return;

    if (currentChapter === 0) {

        chapterIndicator.textContent = "ARCHIVE";

        return;
    }

    chapterIndicator.textContent =
        String(currentChapter).padStart(2, "0");
}


/* ========================================
   SHOW CHAPTER
======================================== */

function showChapter(index, direction = 1) {

    if (
        index < 0 ||
        index >= chapters.length ||
        !chapters[index]
    ) {
        return;
    }

    const previous =
        chapters[currentChapter];

    const next =
        chapters[index];

    if (previous) {

        previous.classList.remove(
            "active",
            "enter-forward",
            "enter-backward"
        );

    }

    currentChapter = index;

    next.scrollTop = 0;

    next.classList.remove(
        "enter-forward",
        "enter-backward"
    );

    void next.offsetWidth;

    next.classList.add(
        direction >= 0
            ? "enter-forward"
            : "enter-backward"
    );

    next.classList.add("active");

    updateChapterIndicator();

    handleChapterEnter(next.id);

    if (next.id === "origin") {
        revealOriginElements();
    }
}


/* ========================================
   NEXT CHAPTER
======================================== */

function nextChapter() {

    if (
        currentChapter <
        chapters.length - 1
    ) {

        showChapter(
            currentChapter + 1,
            1
        );

    }

}


/* ========================================
   PREVIOUS CHAPTER
======================================== */

function previousChapter() {

    if (currentChapter > 0) {

        showChapter(
            currentChapter - 1,
            -1
        );

    }

}


/* ========================================
   CHAPTER ENTER EVENTS
======================================== */

function handleChapterEnter(id) {

    /* Final joke */

    if (id === "final-joke") {

        startFinalJoke();

    }

}


/* ========================================
   OPENING
======================================== */

const enterArchive =
    document.getElementById("enterArchive");

if (enterArchive) {

    enterArchive.addEventListener(
        "click",
        () => {

            showChapter(1, 1);

        }
    );

}


/* ========================================
   YEARBOOK NEXT BUTTON
======================================== */

const originNextBtn =
    document.getElementById("originNextBtn");

if (originNextBtn) {

    originNextBtn.addEventListener(
        "click",
        () => {

            nextChapter();

        }
    );

}


/* ========================================
   YEARBOOK IMAGE FALLBACK
======================================== */

const yearbookImage =
    document.querySelector(
        ".yearbook-photo img"
    );

if (yearbookImage) {

    yearbookImage.addEventListener(
        "error",
        () => {

            yearbookImage.style.display =
                "none";

            const wrapper =
                document.querySelector(
                    ".yearbook-photo"
                );

            if (!wrapper) return;

            wrapper.style.aspectRatio =
                "4 / 5";

            wrapper.style.display =
                "flex";

            wrapper.style.alignItems =
                "center";

            wrapper.style.justifyContent =
                "center";

            wrapper.innerHTML = `
                <div style="
                    font-family: DM Mono, monospace;
                    font-size: 11px;
                    text-align: center;
                    color: #77736b;
                    line-height: 2;
                ">
                    YEARBOOK PHOTO<br>
                    NOT FOUND
                </div>
            `;

        }
    );

}


/* ========================================
   YEARBOOK REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(
        ".yearbook-photo-wrapper, " +
        ".yearbook-card, " +
        ".yearbook-caption"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


function revealOriginElements() {

    revealElements.forEach(
        (element, index) => {

            setTimeout(() => {

                element.classList.add(
                    "revealed"
                );

            }, index * 150);

        }
    );

}


/* ========================================
   AIB — ACCESS CLASSIFIED EVIDENCE
======================================== */

const accessEvidence =
    document.getElementById(
        "accessEvidence"
    );

const evidenceArea =
    document.getElementById(
        "evidenceArea"
    );

const accessTerminal =
    document.getElementById(
        "accessTerminal"
    );


if (
    accessEvidence &&
    evidenceArea &&
    accessTerminal
) {

    accessEvidence.addEventListener(
        "click",
        () => {

            accessEvidence.disabled =
                true;

            accessTerminal.style.pointerEvents =
                "none";

            accessTerminal.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            accessTerminal.style.opacity =
                "0";

            accessTerminal.style.transform =
                "translateY(-15px)";


            const aibChapter =
                document.getElementById(
                    "aib"
                );

            if (aibChapter) {
                aibChapter.scrollTo({
                    top: 0,
                    behavior: "auto"
                });
            }


            setTimeout(() => {

                accessTerminal.classList.add(
                    "hidden"
                );

                evidenceArea.classList.remove(
                    "hidden"
                );

                evidenceArea.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 500);

        }
    );

}


/* ========================================
   DELETE EVIDENCE
======================================== */

const deleteEvidence =
    document.getElementById(
        "deleteEvidence"
    );

const deleteResult =
    document.getElementById(
        "deleteResult"
    );


if (
    deleteEvidence &&
    deleteResult
) {

    deleteEvidence.addEventListener(
        "click",
        () => {

            deleteEvidence.disabled =
                true;

            deleteEvidence.textContent =
                "DELETING...";


            setTimeout(() => {

                deleteResult.classList.remove(
                    "hidden"
                );

                deleteEvidence.textContent =
                    "DELETE FAILED";


                /* Scroll only inside AIB */

                const aibChapter =
                    document.getElementById(
                        "aib"
                    );

                if (aibChapter) {

                    deleteResult.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }, 1600);

        }
    );

}


/* ========================================
   SIDANG — FINAL BOSS
======================================== */

const fightBossBtn =
    document.getElementById(
        "fightBossBtn"
    );

const bossHpFill =
    document.getElementById(
        "boss-hp-fill"
    );

const bossHpText =
    document.getElementById(
        "boss-hp-text"
    );

const bossResult =
    document.getElementById(
        "boss-result"
    );


if (
    fightBossBtn &&
    bossHpFill &&
    bossHpText &&
    bossResult
) {

    fightBossBtn.addEventListener(
        "click",
        () => {

            fightBossBtn.disabled =
                true;

            fightBossBtn.textContent =
                "BATTLE IN PROGRESS...";


            let hp = 100;


            const battle =
                setInterval(() => {

                    hp -=
                        Math.floor(
                            Math.random() * 15
                        ) + 5;


                    if (hp < 0) {
                        hp = 0;
                    }


                    bossHpFill.style.width =
                        `${hp}%`;

                    bossHpText.textContent =
                        `HP ${hp}%`;


                    if (hp <= 0) {

                        clearInterval(
                            battle
                        );


                        bossHpText.textContent =
                            "HP 0%";

                        fightBossBtn.textContent =
                            "BOSS DEFEATED";


                        setTimeout(() => {

                            bossResult.classList.add(
                                "show"
                            );


                            bossResult.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });

                        }, 700);

                    }

                }, 500);

        }
    );

}


/* ========================================
   FINAL JOKE
======================================== */

const waitScreen =
    document.getElementById(
        "wait-screen"
    );

const forgottenScreen =
    document.getElementById(
        "forgotten-screen"
    );

const replayArchiveBtn =
    document.getElementById(
        "replayArchiveBtn"
    );


let finalJokeStarted = false;
let finalJokeTimeout;


function startFinalJoke() {

    if (
        finalJokeStarted ||
        !waitScreen ||
        !forgottenScreen
    ) {
        return;
    }


    finalJokeStarted = true;


    waitScreen.classList.add(
        "show"
    );


    finalJokeTimeout = setTimeout(() => {

        forgottenScreen.classList.add(
            "show"
        );

    }, 2500);

}


/* ========================================
   REPLAY
======================================== */

if (replayArchiveBtn) {

    replayArchiveBtn.addEventListener(
        "click",
        () => {

            /* Reset final joke */

            finalJokeStarted = false;

            clearTimeout(finalJokeTimeout);


            if (waitScreen) {

                waitScreen.classList.remove(
                    "show"
                );

            }


            if (forgottenScreen) {

                forgottenScreen.classList.remove(
                    "show"
                );

            }


            /* Reset boss */

            if (bossHpFill) {

                bossHpFill.style.width =
                    "100%";

            }


            if (bossHpText) {

                bossHpText.textContent =
                    "HP 100%";

            }


            if (fightBossBtn) {

                fightBossBtn.disabled =
                    false;

                fightBossBtn.textContent =
                    "START BATTLE";

            }


            if (bossResult) {

                bossResult.classList.remove(
                    "show"
                );

            }


            /* Reset AIB */

            if (deleteEvidence) {

                deleteEvidence.disabled =
                    false;

                deleteEvidence.textContent =
                    "DELETE ALL EVIDENCE";

            }


            if (deleteResult) {

                deleteResult.classList.add(
                    "hidden"
                );

            }


            if (accessTerminal) {

                accessTerminal.classList.remove(
                    "hidden"
                );

                accessTerminal.style.opacity =
                    "1";

                accessTerminal.style.transform =
                    "translateY(0)";

            }


            if (evidenceArea) {

                evidenceArea.classList.add(
                    "hidden"
                );

            }


            /* Return to opening */

            showChapter(0, -1);

        }
    );

}


/* ========================================
   INITIALIZE
======================================== */

showChapter(0);


/* ========================================
   KEYBOARD NAVIGATION
======================================== */

document.addEventListener(
    "keydown",
    event => {

        /* Don't interfere with typing */

        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA" ||
            event.target.isContentEditable
        ) {
            return;
        }


        if (
            event.key === "ArrowRight" ||
            event.key === "Enter"
        ) {

            /*
             * Only allow Enter/ArrowRight
             * for chapter navigation when
             * not interacting with a button.
             */

            if (
                event.target.tagName !==
                "BUTTON"
            ) {

                nextChapter();

            }

        }


        if (event.key === "ArrowLeft") {

            previousChapter();

        }

    }
);