import React, { useState, useEffect } from 'react';

import './App.css';
import { drillActions } from './data/drillActions';
import {EXCLUDED_HANDS_RFI, EXCLUDED_HANDS_FACING_OPEN, EXCLUDED_HANDS_BLINDS } from './data/excludedHandsGeneral';

// Hand classification utilities
const getHandKey = (card1, card2) => {
  const rankValues = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
    'J': 11, 'Q': 12, 'K': 13, 'A': 14
  };
  
  const rank1 = rankValues[card1.rank];
  const rank2 = rankValues[card2.rank];
  const suited = card1.suit === card2.suit;
  const highRank = Math.max(rank1, rank2);
  const lowRank = Math.min(rank1, rank2);
  
  const rankToString = {
    2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: 'T',
    11: 'J', 12: 'Q', 13: 'K', 14: 'A'
  };
  
  const highRankStr = rankToString[highRank];
  const lowRankStr = rankToString[lowRank];
  
  if (highRank === lowRank) {
    return `${highRankStr}${lowRankStr}`;
  } else if (suited) {
    return `${highRankStr}${lowRankStr}s`;
  } else {
    return `${highRankStr}${lowRankStr}o`;
  }
};

// Reconstructs two card objects from a hand key string (e.g. 'AKs', 'AKo', 'AA')
const handKeyToCards = (handKey) => {
  const rankMap = {
    '2':'2','3':'3','4':'4','5':'5','6':'6','7':'7',
    '8':'8','9':'9','T':'10','J':'J','Q':'Q','K':'K','A':'A'
  };
  const r1 = rankMap[handKey[0]];
  const r2 = rankMap[handKey[1]];
  if (handKey.length === 2)   return [{ suit: 'hearts',   rank: r1 }, { suit: 'clubs',    rank: r2 }]; // pair
  if (handKey.endsWith('s'))  return [{ suit: 'diamonds', rank: r1 }, { suit: 'diamonds', rank: r2 }]; // suited
  return                             [{ suit: 'hearts',   rank: r1 }, { suit: 'clubs',    rank: r2 }]; // offsuit
};

const getCorrectAction = (card1, card2, drillName) => {
  const handKey = getHandKey(card1, card2);
  return drillActions[drillName]?.[handKey] || 'fold';
};

// Helper function to get RFI hands for a position
const getRFIHands = (position) => {
  const rfiDrillName = `RFI ${position}`;
  const rfiActions = drillActions[rfiDrillName];
  
  if (!rfiActions) return [];
  
  // Get all hands where the action is 'raise'
  return Object.keys(rfiActions).filter(handKey => {
    const action = rfiActions[handKey];
    return Array.isArray(action) ? action.includes('raise') : action === 'raise';
  });
};

// Helper function to get hands to exclude based on drill type

const getExcludedHands = (drillName) => {
  // Check if this is an RFI drill
  if (drillName && (drillName.startsWith('RFI ') || drillName === 'RFI Random')) {
    return EXCLUDED_HANDS_RFI;
  }
  
  // Check if this is a Facing Open drill and doesn't contain "STR"
  if (drillName && drillName.startsWith('Facing Open ') && !drillName.includes('STR')) {
  return EXCLUDED_HANDS_FACING_OPEN;
  }

  // If drill involving Straddle, use new excluded hands
  if (drillName && drillName.includes('STR')) {
    return EXCLUDED_HANDS_BLINDS;
  }
  
  // Check if this is a 3bet drill
  if (drillName && drillName.includes('Facing 3bet')) {
    // Extract the user's position from the drill name
    // Format: "Facing 3bet [USER_POSITION] v [OPPONENT_POSITION]"
    const parts = drillName.split(' ');
    const userPosition = parts[2]; // Should be UTG, CO, etc.
    
    // Get all possible hands
    const allPossibleHands = getAllPossibleHandKeys();
    
    // Get hands that this position would RFI with
    const rfiHands = getRFIHands(userPosition);
    
    // Exclude all hands that are NOT in the RFI range
    return allPossibleHands.filter(handKey => !rfiHands.includes(handKey));
  }
};

// Helper function to generate all possible hand keys
const getAllPossibleHandKeys = () => {
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  const hands = [];
  
  for (let i = 0; i < ranks.length; i++) {
    for (let j = i; j < ranks.length; j++) {
      const rank1 = ranks[i];
      const rank2 = ranks[j];
      
      if (i === j) {
        // Pocket pair
        hands.push(`${rank1}${rank2}`);
      } else {
        // Suited and offsuit
        hands.push(`${rank2}${rank1}s`); // Higher rank first for suited
        hands.push(`${rank2}${rank1}o`); // Higher rank first for offsuit
      }
    }
  }
  
  return hands;
};

// Converts a BB value into chip denomination breakdown
// blue=1bb, red=5bb, green=25bb, black=100bb
const getChipBreakdown = (bbValue) => {
  let remaining = Math.round(parseFloat(bbValue));
  const result = [];
  for (const [denom, color] of [[100, 'black'], [25, 'green'], [5, 'red'], [1, 'blue']]) {
    const count = Math.floor(remaining / denom);
    remaining -= count * denom;
    if (count > 0) result.push({ color, count });
  }
  if (result.length === 0) result.push({ color: 'blue', count: 1 });
  return result;
};

// Drill List Component
const DrillList = ({ drills, selectedDrill, onDrillSelect }) => {
  return (
    <div className="drill-list">
      <h3>Drills</h3>
      {drills.map((drill) => (
        <div
          key={drill.id}
          className={`drill-item ${selectedDrill?.id === drill.id ? 'selected' : ''}`}
          onClick={() => onDrillSelect(drill)}
        >
          {drill.name}
        </div>
      ))}
    </div>
  );
};

// Card Component
const Card = ({ suit, rank }) => {
  const getSuitSymbol = (suit) => {
    switch (suit) {
      case 'hearts': return '♥';
      case 'diamonds': return '♦';
      case 'clubs': return '♣';
      case 'spades': return '♠';
      default: return '';
    }
  };

  const getSuitColor = (suit) => {
    return suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#000000';
  };

  return (
    <div className="playing-card">
      <div className="card-content" style={{ color: getSuitColor(suit) }}>
        <div className="card-rank">{rank}</div>
        <div className="card-suit">{getSuitSymbol(suit)}</div>
      </div>
    </div>
  );
};

// Feedback Component (now only for incorrect answers)
const Feedback = ({ feedback, onNext }) => {
  if (!feedback || feedback.isCorrect) return null;

  return (
    <div className="feedback incorrect">
      <div className="feedback-content">
        <div className="feedback-icon">✗</div>
        <div className="feedback-text">
          <div className="feedback-result">Incorrect</div>
          <div className="feedback-details">
            Hand: {feedback.handKey} | Correct Action: {feedback.correctAction}
          </div>
        </div>
      </div>
      <button className="feedback-next-btn" onClick={onNext}>
        Next Hand
      </button>
    </div>
  );
};

// Hand History Component
const HandHistory = ({ history, onRetryMistakes, isRetryMode }) => {
  const hasErrors = history && history.some(h => !h.isCorrect);

  const tableContent = history && history.length > 0 ? (
    <table className="history-table">
      <thead>
        <tr>
          <th>Hand</th>
          <th>Action</th>
          <th>Also OK</th>
          <th>Correct</th>
          <th>Drill</th>
        </tr>
      </thead>
      <tbody>
        {history.map((hand, index) => (
          <tr key={index} className={`history-row ${hand.isCorrect ? 'correct' : 'incorrect'}`}>
            <td className="hand-column">{hand.handKey}</td>
            <td className="action-column">{hand.userAction}</td>
            <td className="also-ok-column">
              {hand.isCorrect && hand.allCorrect && hand.allCorrect.length > 1
                ? hand.allCorrect.filter(a => a !== hand.userAction).join(' / ')
                : ''}
            </td>
            <td className="correct-action-column">
              {!hand.isCorrect && hand.allCorrect ? hand.allCorrect.join(' / ') : ''}
            </td>
            <td className="drill-column">{hand.drillName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="no-history-message">No hands played yet</div>
  );

  return (
    <div className="hand-history">
      <h3>Hand History</h3>
      <button
        className="retry-btn"
        onClick={onRetryMistakes}
        disabled={isRetryMode || !hasErrors}
      >
        {isRetryMode ? 'Retry in Progress...' : 'Retry Mistakes'}
      </button>
      {tableContent}
    </div>
  );
};

// Maps drill/scenario name → user's seat position
const POSITION_MAP = {
  'Facing Open LJ v UTG':      'LJ',
  'Facing Open BTN v UTG':     'BTN',
  'Facing Open BTN v CO':      'BTN',
  'Facing Open SB v UTG':      'SB',
  'Facing Open SB v BTN':      'SB',
  'Facing Open BB v UTG':      'BB',
  'Facing Open BB v BTN':      'BB',
  'Facing Open STR v UTG':     'STR',
  'Facing Open STR v BTN':     'STR',
  'Facing Open STR v SB':      'STR',
  'Facing Open STR v SB + BB': 'STR',
  'Facing 3bet UTG v LJ':      'UTG',
  'Facing 3bet CO v BTN':      'CO',
  'Facing 3bet BTN v SB':      'BTN',
};

// Maps drill/scenario name → extra chip positions beyond SB/BB/STR defaults
const CHIP_CONFIG = {
  'Facing Open LJ v UTG':      { UTG: '6' },
  'Facing Open BTN v UTG':     { UTG: '6' },
  'Facing Open BTN v CO':      { CO: '6' },
  'Facing Open SB v UTG':      { UTG: '6' },
  'Facing Open SB v BTN':      { BTN: '6' },
  'Facing Open BB v UTG':      { UTG: '6' },
  'Facing Open BB v BTN':      { BTN: '6' },
  'Facing Open STR v UTG':     { UTG: '6' },
  'Facing Open STR v BTN':     { BTN: '6' },
  'Facing Open STR v SB':      { SB: '8' },
  'Facing Open STR v SB + BB': { SB: '8', BB: '8' },
  'Facing 3bet UTG v LJ':      { UTG: '6', LJ: '19.5' },
  'Facing 3bet CO v BTN':      { CO: '6', BTN: '22.5' },
  'Facing 3bet BTN v SB':      { BTN: '6', SB: '23.5' },
};

// Poker Table Component
const p = process.env.PUBLIC_URL;
const DRILL_CHARTS = {
  'RFI UTG':                   `${p}/RFI-UTG.png`,
  'RFI LJ':                    `${p}/RFI-LJ.png`,
  'RFI HJ':                    `${p}/RFI-HJ.png`,
  'RFI CO':                    `${p}/RFI-CO.png`,
  'RFI BTN':                   `${p}/RFI-BTN.png`,
  'RFI SB':                    `${p}/RFI-SB.png`,
  'Facing Open LJ v UTG':      `${p}/Facing-Open-LJ-v-UTG.png`,
  'Facing Open BTN v UTG':     `${p}/Facing-Open-BTN-v-UTG.png`,
  'Facing Open BTN v CO':      `${p}/Facing-Open-BTN-v-CO.png`,
  'Facing Open BTN v HJ':      `${p}/Facing-Open-BTN-v-HJ.png`,
  'Facing Open SB v UTG':      `${p}/Facing-Open-SB-v-UTG.png`,
  'Facing Open SB v BTN':      `${p}/Facing-Open-SB-v-BTN.png`,
  'Facing Open BB v UTG':      `${p}/Facing-Open-BB-v-UTG.png`,
  'Facing Open BB v BTN':      `${p}/Facing-Open-BB-v-BTN.png`,
  'Facing Open STR v UTG':     `${p}/Facing-Open-STR-v-UTG.png`,
  'Facing Open STR v BTN':     `${p}/Facing-Open-STR-v-BTN.png`,
  'Facing Open STR v SB':      `${p}/Facing-Open-STR-v-SB.png`,
  'Facing Open STR v SB + BB': `${p}/Facing-Open-STR-v-SB-BB.png`,
  'Facing 3bet UTG v LJ':      `${p}/Facing-3Bet-UTG-v-LJ.png`,
  'Facing 3bet CO v BTN':      `${p}/Facing-3Bet-CO-v-BTN.png`,
  'Facing 3bet BTN v SB':      `${p}/Facing-3Bet-BTN-v-SB.png`,
};

const PokerTable = ({ selectedDrill, onHandHistoryUpdate, isRetryMode, retryQueue, onRetryComplete }) => {
  const [userCards, setUserCards] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showActions, setShowActions] = useState(true);
  const [streak, setStreak] = useState(0);
  const [correctAction, setCorrectAction] = useState(null);
  const [totalActions, setTotalActions] = useState(0);
  const [correctActions, setCorrectActions] = useState(0);
  const [randomPosition, setRandomPosition] = useState(null);
  const [retryIndex, setRetryIndex] = useState(0);
  const [currentRetryDrill, setCurrentRetryDrill] = useState(null);
  const [showChart, setShowChart] = useState(false);

  const chartDrill = isRetryMode
    ? currentRetryDrill
    : selectedDrill?.name === 'RFI Random' && randomPosition
      ? `RFI ${randomPosition}`
      : (randomPosition ?? selectedDrill?.name);


  useEffect(() => {
    // Reset stats when drill changes
    setTotalActions(0);
    setCorrectActions(0);
    setStreak(0);
    setRandomPosition(null);
    onHandHistoryUpdate([]); // Reset history
    
    // Auto-start the drill by dealing a new hand if a drill is selected
    if (selectedDrill) {
      dealNewHand();
    } else {
      // Clear cards when no drill is selected
      setUserCards(null);
      setFeedback(null);
      setShowActions(false);
    }
  }, [selectedDrill, onHandHistoryUpdate]);

  // Enter retry mode: deal the first hand when retryQueue is loaded
  useEffect(() => {
    if (isRetryMode && retryQueue && retryQueue.length > 0) {
      setRetryIndex(0);
      dealRetryHand(0, retryQueue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRetryMode, retryQueue]);

  const positions = ['BTN', 'SB', 'BB', 'STR', 'UTG', 'LJ', 'HJ', 'CO'];
  
  // Generate all 169 possible hand combinations
  const generateAllHands = () => {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const rankValues = {
      '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
      'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    
    const hands = [];
    
    // Generate all possible combinations
    for (let i = 0; i < ranks.length; i++) {
      for (let j = i; j < ranks.length; j++) {
        const rank1 = ranks[i];
        const rank2 = ranks[j];
        const rank1Value = rankValues[rank1];
        const rank2Value = rankValues[rank2];
        
        if (i === j) {
          // Pocket pair - heart and club
          hands.push([
            { suit: 'hearts', rank: rank1 },
            { suit: 'clubs', rank: rank2 }
          ]);
        } else {
          // Suited hand - both spades (higher rank on left)
          const higherRank = rank2Value > rank1Value ? rank2 : rank1;
          const lowerRank = rank2Value > rank1Value ? rank1 : rank2;
          
          hands.push([
            { suit: 'diamonds', rank: higherRank },
            { suit: 'diamonds', rank: lowerRank }
          ]);
          
          // Offsuit hand - spade and club (higher rank on left)
          hands.push([
            { suit: 'hearts', rank: higherRank },
            { suit: 'clubs', rank: lowerRank }
          ]);
        }
      }
    }
    
    return hands;
  };
  
  // Deals a specific hand from the retry queue at the given index
  const dealRetryHand = (idx, queue) => {
    const q = queue || retryQueue;
    if (!q || idx >= q.length) return;
    const { handKey, drillName } = q[idx];
    setCurrentRetryDrill(drillName);
    setUserCards(handKeyToCards(handKey));
    setCorrectAction(null);
    setFeedback(null);
    setShowActions(true);
  };

  const dealNewHand = () => {
    // Determine the current drill name for logic
    let currentDrillName = selectedDrill?.name;
    
    if (selectedDrill?.name === 'RFI Random') {
      const rfiPositions = ['UTG', 'LJ', 'HJ', 'CO', 'BTN', 'SB'];
      const randomPos = rfiPositions[Math.floor(Math.random() * rfiPositions.length)];
      setRandomPosition(randomPos);
      currentDrillName = `RFI ${randomPos}`;
    }
    
    if (selectedDrill?.name === 'Facing Open IP Random') {
      const facingOpenDrills = ['Facing Open LJ v UTG', 'Facing Open BTN v UTG', 'Facing Open BTN v CO'];
      const randomDrill = facingOpenDrills[Math.floor(Math.random() * facingOpenDrills.length)];
      setRandomPosition(randomDrill);
      currentDrillName = randomDrill;
    }
  
    if (selectedDrill?.name === 'Facing Open OOP Random') {
      const facingOpenOOPDrills = ['Facing Open SB v UTG', 'Facing Open SB v BTN', 'Facing Open BB v UTG', 'Facing Open BB v BTN', 'Facing Open STR v UTG', 'Facing Open STR v BTN'];
      const randomDrill = facingOpenOOPDrills[Math.floor(Math.random() * facingOpenOOPDrills.length)];
      setRandomPosition(randomDrill);
      currentDrillName = randomDrill;
    }
  
    if (selectedDrill?.name === 'Facing 3bet Random') {
      const facing3betDrills = ['Facing 3bet UTG v LJ', 'Facing 3bet CO v BTN', 'Facing 3bet BTN v SB'];
      const randomDrill = facing3betDrills[Math.floor(Math.random() * facing3betDrills.length)];
      setRandomPosition(randomDrill);
      currentDrillName = randomDrill;
    }

    const allHands = generateAllHands();
    
    // Get the appropriate excluded hands based on drill type
    const excludedHands = getExcludedHands(currentDrillName);
    
    // Filter out excluded hands
    const availableHands = allHands.filter(hand => {
      const handKey = getHandKey(hand[0], hand[1]);
      return !excludedHands.includes(handKey);
    });
    
    // If no hands available after filtering, fall back to all hands
    const handsToUse = availableHands.length > 0 ? availableHands : allHands;
    
    const randomIndex = Math.floor(Math.random() * handsToUse.length);
    const newCards = handsToUse[randomIndex];
    
    setCorrectAction(null);
    setUserCards(newCards);
    setFeedback(null);
    setShowActions(true);
  };


  const getUserPosition = () => {
    if (isRetryMode && currentRetryDrill) {
      return POSITION_MAP[currentRetryDrill] ?? currentRetryDrill.split(' ').at(-1);
    }
    if (!selectedDrill) return 'UTG';
    const name = selectedDrill.name;
    if (name === 'RFI Random') return randomPosition || 'UTG';
    if (name === 'Facing Open IP Random' || name === 'Facing Open OOP Random' || name === 'Facing 3bet Random') {
      return POSITION_MAP[randomPosition] ?? 'UTG';
    }
    return POSITION_MAP[name] ?? name.split(' ').at(-1);
  };

  const userPosition = getUserPosition();

  // Resolve the active scenario name (randomPosition for Random drills, drill name otherwise)
  const activeDrillName = isRetryMode ? currentRetryDrill : (randomPosition ?? selectedDrill?.name);
  const chips = { SB: '.5', BB: '1', STR: '2', ...(CHIP_CONFIG[activeDrillName] ?? {}) };

  const rearrangedPositions = [
    ...positions.slice(positions.indexOf(userPosition)),
    ...positions.slice(0, positions.indexOf(userPosition))
  ];

  const getPositionStyle = (index, total) => {
    const angle = (index * 2 * Math.PI) / total + Math.PI / 2;
    const isDiagonal = Math.abs(Math.cos(angle)) > 0.1 && Math.abs(Math.sin(angle)) > 0.1;
    
    let radiusX = isDiagonal ? 58 : 50;
    let radiusY = isDiagonal ? 55 : 50;
    
    const x = 50 + radiusX * Math.cos(angle);
    const y = 50 + radiusY * Math.sin(angle);
    
    return {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)'
    };
  };

  const getButtonChipPosition = (index, total, type) => {
    const angle = (index * 2 * Math.PI) / total + Math.PI / 2;
    const isDiagonal = Math.abs(Math.cos(angle)) > 0.1 && Math.abs(Math.sin(angle)) > 0.1;
    const playerRadiusX = isDiagonal ? 58 : 50;
    const playerRadiusY = isDiagonal ? 55 : 50;
    const centerOffset = -1.5;

    let x = 50 + (playerRadiusX * centerOffset) * Math.cos(angle);
    let y = 50 + (playerRadiusY * centerOffset) * Math.sin(angle);

    if (type === 'button') {
      // Shift dealer button perpendicular to the radial direction to avoid chip collision
      const perpOffset = 38;
      x += -Math.sin(angle) * perpOffset;
      y += Math.cos(angle) * perpOffset;
    }

    return {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)'
    };
  };

  const getUserCardsPosition = (index, total) => {
    const angle = (index * 2 * Math.PI) / total + Math.PI / 2;
    const isDiagonal = Math.abs(Math.cos(angle)) > 0.1 && Math.abs(Math.sin(angle)) > 0.1;
    const playerRadiusX = isDiagonal ? 58 : 50;
    const playerRadiusY = isDiagonal ? 55 : 50;
    const cardOffset = -2.8;
    
    const x = 50 + (playerRadiusX * cardOffset) * Math.cos(angle);
    const y = 50 + (playerRadiusY * cardOffset) * Math.sin(angle);
    
    return {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)'
    };
  };

  const handleAction = (action) => {
    if ((!selectedDrill && !isRetryMode) || feedback) return;

    const drillToCheck = isRetryMode
      ? currentRetryDrill
      : (selectedDrill.name.endsWith('Random') && randomPosition)
        ? (selectedDrill.name === 'RFI Random' ? `RFI ${randomPosition}` : randomPosition)
        : selectedDrill.name;

    const correctAction = getCorrectAction(userCards[0], userCards[1], drillToCheck);
    const handKey = getHandKey(userCards[0], userCards[1]);

    // Check if action is correct (handle both single actions and arrays)
    const isCorrect = Array.isArray(correctAction)
      ? correctAction.includes(action)
      : action === correctAction;

    const result = {
      isCorrect: isCorrect,
      correctAction: Array.isArray(correctAction)
        ? correctAction.join(' or ')
        : correctAction,
      handKey: handKey,
      userAction: action
    };

    // Update totals
    setTotalActions(prev => prev + 1);
    if (result.isCorrect) {
      setCorrectActions(prev => prev + 1);
    }

    // Record the hand in history
    const historyEntry = {
      handKey: handKey,
      userAction: action,
      isCorrect: result.isCorrect,
      drillName: drillToCheck,
      allCorrect: Array.isArray(correctAction) ? correctAction : [correctAction]
    };
    onHandHistoryUpdate(prev => [historyEntry, ...prev]);

    if (isRetryMode) {
      const nextIdx = retryIndex + 1;
      setRetryIndex(nextIdx);
      if (result.isCorrect) {
        setCorrectAction(correctAction);
        setShowActions(false);
        setTimeout(() => {
          if (nextIdx >= retryQueue.length) {
            onRetryComplete();
          } else {
            dealRetryHand(nextIdx);
          }
        }, 200);
      } else {
        setStreak(0);
        setFeedback(result);
        setShowActions(false);
      }
      return;
    }

    if (result.isCorrect) {
      setStreak(prev => prev + 1);
      setCorrectAction(correctAction);
      setShowActions(false);
      setTimeout(() => {
        dealNewHand();
      }, 200);
    } else {
      setStreak(0);
      setFeedback(result);
      setShowActions(false);
    }
  };

  const handleNextHand = () => {
    if (isRetryMode) {
      if (retryIndex >= retryQueue.length) {
        onRetryComplete();
      } else {
        dealRetryHand(retryIndex);
      }
    } else {
      dealNewHand();
    }
  };

  return (
    <div className="poker-table-container">
      <div className="table-wrapper">
        <div className="poker-table">
          {rearrangedPositions.map((position, index) => (
            <div key={position} style={getPositionStyle(index, 8)}>
              <div className={`player-circle ${position === userPosition ? 'user-position' : ''}`}>
                {position}
              </div>
              
              {position === 'BTN' && (
                <div className="dealer-button" style={getButtonChipPosition(index, 8, 'button')}>D</div>
              )}
              
              {chips[position] && (
                <div className="chip-display" style={getButtonChipPosition(index, 8, 'chip')}>
                  <div className="chip-circles">
                    {(() => {
                      const allChips = getChipBreakdown(chips[position])
                        .flatMap(({ color, count }) =>
                          Array.from({ length: Math.min(count, 4) }, () => color)
                        )
                        .reverse();
                      return allChips.map((color, i) => (
                        <div
                          key={`${color}-${i}`}
                          className={`chip-dot chip-${color}`}
                          style={{ zIndex: allChips.length - i }}
                        />
                      ));
                    })()}
                  </div>
                  <div className="chip-label">{chips[position]}</div>
                </div>
              )}
              
              {position === userPosition && userCards && (
                <div className="user-cards" style={getUserCardsPosition(index, 8)}>
                  <Card suit={userCards[0].suit} rank={userCards[0].rank} />
                  <Card suit={userCards[1].suit} rank={userCards[1].rank} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="stats-container">
        {/* Accuracy Counter */}
        <div className="accuracy-counter">
          <div className="accuracy-label">Accuracy</div>
          <div className="accuracy-stats">
            {totalActions > 0 ? (
              <>
                <div className="accuracy-fraction">{correctActions}/{totalActions}</div>
                <div className="accuracy-percentage">
                  {Math.round((correctActions / totalActions) * 100)}%
                </div>
              </>
            ) : (
              <div className="accuracy-placeholder">--</div>
            )}
          </div>
        </div>

        {isRetryMode && retryQueue && retryQueue.length > 0 && (
          <div className="retry-progress">
            Retry: {Math.min(retryIndex, retryQueue.length)}/{retryQueue.length}
          </div>
        )}
      </div>

      <div className="streak-counter">
        <div className="streak-flame">🔥</div>
        <div className="streak-number">{streak}</div>
      </div>

      <Feedback feedback={feedback} onNext={handleNextHand} />

      {showChart && DRILL_CHARTS[chartDrill] && (
        <div className="chart-modal-overlay" onClick={() => setShowChart(false)}>
          <div className="chart-modal" onClick={e => e.stopPropagation()}>
            <button className="chart-modal-close" onClick={() => setShowChart(false)}>✕</button>
            <img
              src={DRILL_CHARTS[chartDrill]}
              alt={`${chartDrill} strategy chart`}
              className="chart-modal-img"
            />
          </div>
        </div>
      )}

      {(selectedDrill || isRetryMode) && userCards && (
        <div className="action-buttons">
          <button 
            className={`action-btn fold-btn ${
              (Array.isArray(correctAction) ? correctAction.includes('fold') : correctAction === 'fold') 
              ? 'correct-glow' : ''
            }`}
            onClick={() => handleAction('fold')}
            disabled={!showActions}
          >
            Fold
          </button>
          <button 
            className={`action-btn raise-btn ${
              (Array.isArray(correctAction) ? correctAction.includes('raise') : correctAction === 'raise') 
              ? 'correct-glow' : ''
            }`}
            onClick={() => handleAction('raise')}
            disabled={!showActions}
          >
            Raise
          </button>
          <button 
            className={`action-btn call-btn ${
              (Array.isArray(correctAction) ? correctAction.includes('call') : correctAction === 'call') 
              ? 'correct-glow' : ''
            }`}
            onClick={() => handleAction('call')}
            disabled={!showActions}
          >
            Call
          </button>

          {DRILL_CHARTS[chartDrill] && (
            <button
              className="chart-btn"
              onClick={() => setShowChart(true)}
              title="View strategy chart"
            >
              <img src={`${process.env.PUBLIC_URL}/Poker-Ranges-Chart-Icon.png`} alt="chart" className="chart-btn-icon" />
            </button>
          )}
        </div>
      )}
      
      {!selectedDrill && (
        <div className="no-drill-message">
          Select a drill to start practicing
        </div>
      )}
      
    </div>
  );
};

// Main App Component
const App = () => {
  const [selectedDrill, setSelectedDrill] = useState(null);
  const [handHistory, setHandHistory] = useState([]);
  const [retryQueue, setRetryQueue] = useState([]);
  const [isRetryMode, setIsRetryMode] = useState(false);

  const startRetrySession = () => {
    const seen = new Set();
    const queue = handHistory
      .filter(h => !h.isCorrect)
      .filter(h => {
        const key = `${h.handKey}|${h.drillName}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .map(h => ({ handKey: h.handKey, drillName: h.drillName }))
      .reverse();
    setHandHistory([]);
    setRetryQueue(queue);
    setIsRetryMode(true);
  };

  const endRetrySession = () => {
    setIsRetryMode(false);
    setRetryQueue([]);
  };

  const drills = [
    { id: 20, name: 'RFI Random' },
    { id: 21, name: 'Facing Open IP Random' },
    { id: 22, name: 'Facing Open OOP Random'},
    { id: 23, name: 'Facing 3bet Random' },
    { id: 1, name: 'RFI UTG' },
    { id: 2, name: 'RFI LJ' },
    { id: 3, name: 'RFI HJ' },
    { id: 4, name: 'RFI CO' },
    { id: 5, name: 'RFI BTN' },
    { id: 24, name: 'RFI SB' },
    { id: 6, name: 'Facing Open LJ v UTG'},
    { id: 7, name: 'Facing Open BTN v UTG'},
    { id: 8, name: 'Facing Open BTN v CO'},
    { id: 9, name: 'Facing Open SB v UTG'},
    { id: 10, name: 'Facing Open SB v BTN'},
    { id: 11, name: 'Facing Open BB v UTG'},
    { id: 12, name: 'Facing Open BB v BTN'},
    { id: 13, name: 'Facing Open STR v UTG'},
    { id: 14, name: 'Facing Open STR v BTN'},
    { id: 15, name: 'Facing Open STR v SB'},
    { id: 16, name: 'Facing Open STR v SB + BB'},
    { id: 17, name: 'Facing 3bet UTG v LJ'},
    { id: 18, name: 'Facing 3bet CO v BTN'}, 
    { id: 19, name: 'Facing 3bet BTN v SB'}
  ];

  

// Update the return statement to include HandHistory component
return (
  <div className="app">
    <div className="app-container">
      <DrillList 
        drills={drills}
        selectedDrill={selectedDrill}
        onDrillSelect={setSelectedDrill}
      />
      <PokerTable
        selectedDrill={selectedDrill}
        onHandHistoryUpdate={setHandHistory}
        isRetryMode={isRetryMode}
        retryQueue={retryQueue}
        onRetryComplete={endRetrySession}
      />
      <HandHistory
        history={handHistory}
        onRetryMistakes={startRetrySession}
        isRetryMode={isRetryMode}
      />
    </div>
  </div>
);
};

export default App;