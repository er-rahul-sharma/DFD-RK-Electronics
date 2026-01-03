/**
 * R K Electronics - Complete Flowcharts JavaScript File
 * Contains all Mermaid.js diagrams as separate functions
 */

// // 1. High-Level System Architecture Flow
export function getSystemArchitectureFlow() {
    return `graph TB
    subgraph "Client Layer"
        A[Web Browser<br/>React + TypeScript] --> B[Mobile Users<br/>Primary Audience]
        A --> C[Admin Panel<br/>Business Management]
    end
    
    subgraph "API Layer"
        D[ASP.NET Core WebAPI<br/>RESTful Endpoints] --> E[Controller Layer]
        E --> F[Service Layer<br/>Business Logic]
        F --> G[Repository Layer]
        G --> H[Dapper + Stored Procedures]
    end
    
    subgraph "External Services"
        I[WhatsApp Business API<br/>Primary Communication]
        J[Zoho Zepto Mail<br/>Transactional Emails]
        K[Razorpay Payment<br/>Online Payments]
    end
    
    subgraph "Data Layer"
        L[SQL Server<br/>Relational Database]
        M[Redis Cache<br/>Optional Optimization]
    end
    
    A <-->|HTTPS REST API| D
    D -->|Read/Write| L
    D <-->|Send Messages| I
    D <-->|Send Emails| J
    D <-->|Process Payments| K
    F -->|Cache Data| M`;
}

// 2. User Registration & Authentication Flow
export function getAuthenticationFlow() {
    return `flowchart TD
    A[User Visits Website] --> B{First Time User?}
    
    B -->|Yes| C[Registration Process]
    B -->|No| D[Login Process]
    B -->|Forgot Password| E[Password Reset Process]
    
    subgraph C[Registration Flow]
        C1[Enter Mobile Number]
        C2[Validate Mobile Format]
        C2 -->|Invalid| C3[Show Error]
        C3 --> C1
        C2 -->|Valid| C4[Check Mobile Exists]
        C4 -->|Exists| C5[Show Error]
        C5 --> D
        C4 -->|Not Exists| C6[Send OTP via WhatsApp]
        C6 --> C7[User Enters OTP]
        C7 --> C8{OTP Valid?}
        C8 -->|No| C9[Show Error]
        C9 --> C10{Attempts < 3?}
        C10 -->|Yes| C7
        C10 -->|No| C11[Lock mobile]
        C8 -->|Yes| C12[Create Account]
        C12 --> C13[Set Password]
        C13 --> C14[Complete Profile]
        C14 --> C15[Auto Login]
    end
    
    subgraph D[Login Flow]
        D1[Enter Mobile Number]
        D2[Enter Password]
        D3[Validate Credentials]
        D3 -->|Invalid| D4[Increment Counter]
        D4 --> D5{Attempts < 5?}
        D5 -->|Yes| D2
        D5 -->|No| D6[Lock Account]
        D3 -->|Valid| D7[Generate JWT]
        D7 --> D8[Redirect to Dashboard]
    end
    
    subgraph E[Password Reset]
        E1[Enter Mobile Number]
        E2[Send OTP via WhatsApp]
        E2 --> E3[Verify OTP]
        E3 -->|Valid| E4[Set New Password]
        E4 --> E5[Invalidate Sessions]
        E5 --> E6[Send Confirmation]
        E6 --> D
    end`;
}

// 3. Product Browsing & Purchasing Flow
export function getProductPurchaseFlow() {
    return `flowchart TD
    A[User Browses] --> B[View Categories]
    B --> C{Category Selected?}
    C -->|Yes| D[Show Category Products]
    C -->|No| E[Show Featured Products]
    D --> F[Apply Filters]
    F --> G[Sort Products]
    G --> H[View Product Details]
    H --> I{Add to Cart?}
    I -->|Yes| J[Add to Cart]
    I -->|No| K[Continue Shopping]
    J --> L[Go to Cart]
    L --> M{Checkout?}
    M -->|Yes| N[Checkout Process]
    M -->|No| B
    
    subgraph N[Checkout]
        N1[Address Selection]
        N2[Delivery Options]
        N3[Payment Method]
        N4[Order Review]
        N5[Order Confirmation]
        N1 --> N2 --> N3 --> N4 --> N5
    end
    
    N5 --> O[Order Processing]
    O --> P[Send WhatsApp Confirmation]
    P --> Q[Order Tracking]`;
}

// 4. TV Repair Service Booking Flow
export function getServiceBookingFlow() {
    return `flowchart TD
    A[User Clicks Book Service] --> B[Service Booking Wizard]
    
    subgraph B[5-Step Process]
        B1[Service Type]
        B2[TV Details]
        B3[Problem Description]
        B4[Upload Images]
        B5[Schedule Appointment]
        B1 --> B2 --> B3 --> B4 --> B5
    end
    
    B5 --> C[Select Service Address]
    C --> D[Review Booking]
    D --> E{Confirm?}
    E -->|Yes| F[Create Appointment]
    E -->|No| G[Return Home]
    F --> H[Send Confirmation]
    H --> I[Admin Assignment]
    
    subgraph I[Assignment]
        I1[Admin Notification]
        I2[Review Details]
        I3[Assign Technician]
        I4[Update Status]
        I5[Send Update to User]
        I1 --> I2 --> I3 --> I4 --> I5
    end
    
    I5 --> J[Service Execution]
    
    subgraph J[Service Steps]
        J1[Technician Visit]
        J2[TV Diagnosis]
        J3[Cost Estimate]
        J4[User Approval]
        J5[Perform Repair]
        J6[Testing & Quality]
        J7[Collect Payment]
        J8[Update Status]
        J1 --> J2 --> J3 --> J4 --> J5 --> J6 --> J7 --> J8
    end
    
    J8 --> K[Post-Service]
    K --> L[Send Completion]
    L --> M[Request Review]
    M --> N[Activate Warranty]`;
}

// 5. Admin Dashboard Flow
export function getAdminDashboardFlow() {
    return `flowchart TD
    A[Admin Login] --> B[Dashboard Overview]
    
    subgraph B[Dashboard]
        C1[Sales Summary]
        C2[Service Appointments]
        C3[Inventory Alerts]
        C4[Customer Metrics]
        C5[Quick Actions]
        C1 & C2 & C3 & C4 & C5 --> C6[Action Selection]
    end
    
    C6 --> D{Selected Action}
    D -->|Manage Orders| E[Order Management]
    D -->|Manage Services| F[Service Management]
    D -->|Manage Products| G[Product Management]
    D -->|Manage Content| H[Content Management]
    D -->|Manage Users| I[User Management]
    
    subgraph E[Order Management]
        E1[View Orders]
        E2[Process Order]
        E3[Update Status]
        E4[Send Notifications]
        E1 --> E2 --> E3 --> E4
    end
    
    subgraph F[Service Management]
        F1[View Calendar]
        F2[Assign Technician]
        F3[Update Status]
        F4[Generate Reports]
        F1 --> F2 --> F3 --> F4
    end`;
}

// 6. Order Fulfillment Flow
export function getOrderFulfillmentFlow() {
    return `flowchart TD
    A[Customer Places Order] --> B[Order Processing]
    
    subgraph B[Processing]
        C1[Validate Order]
        C2[Generate Invoice]
        C3[Update Inventory]
        C4[Send Confirmation]
        C5[Alert Admin]
        C1 --> C2 --> C3 --> C4 --> C5
    end
    
    C5 --> D[Admin Review]
    D --> E{Order Valid?}
    E -->|Yes| F[Prepare Order]
    E -->|No| G[Contact Customer]
    G --> H{Issue Resolved?}
    H -->|Yes| F
    H -->|No| I[Cancel Order]
    
    F --> J[Assign Delivery]
    J --> K[Update Status]
    K --> L[Delivery Process]
    
    subgraph L[Delivery]
        M1[Dispatch]
        M2[In Transit]
        M3[Delivery Attempt]
        M4{Successful?}
        M4 -->|Yes| M5[Mark Delivered]
        M4 -->|No| M6[Reschedule]
        M5 --> M7[Collect Payment]
        M6 --> M3
    end
    
    M7 --> N[Post-Delivery]
    N --> O[Request Review]
    O --> P[Follow-up]`;
}

// 7. Notification System Flow
export function getNotificationFlow() {
    return `flowchart TD
    A[System Event] --> B{Event Type}
    
    B -->|Registration| C[Welcome Message]
    B -->|Order| D[Order Confirmation]
    B -->|Appointment| E[Appointment Confirmation]
    B -->|Status Update| F[Status Notification]
    B -->|Payment| G[Payment Receipt]
    B -->|Delivery| H[Delivery Update]
    B -->|Review Request| I[Review Prompt]
    
    C & D & E & F & G & H & I --> J[Notification Queue]
    J --> K{Channel}
    K -->|WhatsApp| L[Prepare Template]
    K -->|Email| M[Prepare Email]
    L --> N[Send via WhatsApp API]
    M --> O[Send via Zoho SMTP]
    N --> P{Success?}
    P -->|Yes| Q[Update Status]
    P -->|No| R[Retry]
    O --> S{Success?}
    S -->|Yes| T[Update Status]
    S -->|No| U[Fallback to WhatsApp]
    Q & T --> V[User Receives]`;
}

// 8. Password Strength Validation Flow
export function getPasswordValidationFlow() {
    return `flowchart TD
    A[User Enters Password] --> B[Trim Whitespace]
    B --> C{Length 8-64?}
    C -->|No| D[Show Error]
    C -->|Yes| E[Check Mobile in Password]
    E -->|Contains| F[Show Error]
    E -->|Not Contains| G[Check Repeated Chars]
    G -->|Repeated| H[Show Error]
    G -->|Not Repeated| I[Check Common Sequences]
    I -->|Common| J[Show Error]
    I -->|Not Common| K[Check Character Types]
    
    subgraph K[Requirements]
        L[Uppercase] --> M{At least 1?}
        N[Lowercase] --> O{At least 1?}
        P[Number] --> Q{At least 1?}
        R[Special Char] --> S{At least 1?}
        M & O & Q & S --> T{All met?}
    end
    
    T -->|No| U[Show Error]
    T -->|Yes| V[Calculate Strength]
    V --> W{Strength Level}
    W -->|Weak| X[Show Warning]
    W -->|Medium| Y[Show Info]
    W -->|Strong| Z[Show Success]
    X --> AA{Proceed?}
    AA -->|Yes| BB[Continue]
    AA -->|No| A
    Y --> CC{Continue?}
    CC -->|Yes| BB
    CC -->|No| A
    Z --> BB
    BB --> DD[Confirm Password]
    DD --> EE{Match?}
    EE -->|No| FF[Show Error]
    FF --> DD
    EE -->|Yes| GG[Validation Complete]`;
}

// 9. Database Transaction Flow
export function getDatabaseTransactionFlow() {
    return `flowchart TD
    A[API Request] --> B[Controller Validation]
    B --> C[Service Processing]
    C --> D[Begin Transaction]
    
    D --> E[Execute SP1]
    E --> F{SP1 Success?}
    F -->|Yes| G[Execute SP2]
    F -->|No| H[Rollback]
    H --> I[Return Error]
    
    G --> J{SP2 Success?}
    J -->|Yes| K[Execute SPN]
    J -->|No| H
    
    K --> L{All Success?}
    L -->|Yes| M[Commit]
    L -->|No| H
    
    M --> N[Log Success]
    N --> O[Send Notifications]
    O --> P[Return Success]
    
    subgraph Q[Example: Order]
        R1[Create Order Header]
        R2[Add Order Items]
        R3[Update Inventory]
        R4[Queue Notification]
        R5[Clear Cart]
        R1 --> R2 --> R3 --> R4 --> R5
    end
    
    E & G & K --> Q`;
}

// 10. Enhanced Security Flow
export function getSecurityFlow() {
    return `flowchart TD
    A[Authentication Request] --> B[Threat Detection]
    
    subgraph B[Detection]
        C[IP Check]
        D[Rate Limiting]
        E[User Agent Analysis]
        F[Geolocation Check]
        C & D & E & F --> G{Threats?}
    end
    
    G -->|Yes| H[Security Challenge]
    G -->|No| I[Proceed]
    
    subgraph H[Challenges]
        J[CAPTCHA]
        K[Additional OTP]
        L[Account Freeze]
        M[Block Request]
        J & K --> N{Passed?}
        N -->|Yes| I
        N -->|No| L
    end
    
    I --> O[Authentication]
    
    subgraph O[Process]
        P[Password Validation]
        Q[Multi-factor Check]
        R[Session Management]
        P & Q --> S{Success?}
        S -->|Yes| T[Create Session]
        S -->|No| U[Failure Processing]
    end
    
    subgraph U[Failure]
        V[Increment Counter]
        V --> W{Max Attempts?}
        W -->|Yes| X[Lock Account]
        W -->|No| Y[Return Error]
        X --> Z[Send Alert]
        Z --> AA[Notify Admin]
    end
    
    T --> BB[Post-Auth Security]
    
    subgraph BB[Monitoring]
        CC[Activity Monitoring]
        DD[Session Heartbeat]
        EE[Token Rotation]
        FF[Session Control]
        CC --> GG{Suspicious?}
        GG -->|Yes| HH[Force Re-auth]
        GG -->|No| II[Normal Operation]
    end`;
}

// 11. User Journey Flow
export function getUserJourneyFlow() {
    return `journey
    title R K Electronics Customer Journey
    section Discovery Phase
      Visit Website: 5: Visitor
      Browse Products: 4: Visitor
      Read Blog/Reviews: 3: Visitor
      Check Services: 5: Visitor
    
    section Conversion Phase
      Register Account: 5: New User
      First Purchase: 4: Customer
      Book First Service: 5: Customer
      Receive Quality Service: 5: Satisfied Customer
    
    section Retention Phase
      Repeat Purchase: 4: Returning Customer
      Book Another Service: 5: Loyal Customer
      Write Positive Review: 3: Advocate
      Refer Friends: 2: Ambassador
    
    section Loyalty Phase
      Regular Purchases: 4: Regular
      Subscribe to Offers: 3: Engaged
      Provide Feedback: 4: Valued
      Premium Services: 5: VIP`;
}

// 12. Error Handling Flow
export function getErrorHandlingFlow() {
    return `flowchart TD
    A[Exception Occurs] --> B{Exception Type}
    
    B -->|Database Error| C[Log DB Details]
    B -->|API Error| D[Log API Details]
    B -->|Business Error| E[Log Business Details]
    B -->|External Error| F[Log External Details]
    
    C & D & E & F --> G[Determine Severity]
    
    G -->|Critical| H[Send Alert]
    G -->|High| I[Send Notification]
    G -->|Medium| J[Show User Error]
    G -->|Low| K[Log Only]
    
    H --> L[Recovery Process]
    I --> M[Schedule Fix]
    J --> N{Alternative?}
    N -->|Yes| O[Redirect]
    N -->|No| P[Show Maintenance]
    
    subgraph L[Recovery]
        Q1[Identify Cause]
        Q2[Execute Scripts]
        Q3[Rollback if Needed]
        Q4[Restart Services]
        Q5[Verify Recovery]
        Q6[Post-Mortem]
        Q1 --> Q2 --> Q3 --> Q4 --> Q5 --> Q6
    end
    
    O --> R[Continue Journey]
    P --> S[User Returns Later]`;
}

// 13. Data Sync Flow
export function getDataSyncFlow() {
    return `flowchart LR
    subgraph "Client Side"
        A[React Frontend] --> B[Local Storage]
        A --> C[Session Storage]
        A --> D[IndexedDB]
    end
    
    subgraph "Sync Process"
        E[Network Check] --> F{Online?}
        F -->|Yes| G[Synchronize Data]
        F -->|No| H[Queue Operations]
        G --> I[Send Queued Data]
        I --> J[Receive Updates]
        J --> K[Update Local]
        H --> L[Store Locally]
        L --> M[Offline Mode]
    end
    
    subgraph "Server Side"
        N[ASP.NET API] --> O[Process Sync]
        O --> P[Validate Data]
        P --> Q[Update Database]
        Q --> R[Generate Response]
        R --> S[Push Notification]
    end
    
    K --> A
    M --> A
    S --> T[Browser Notification]
    T --> A`;
}

// 14. Authentication State Diagram
export function getAuthStateDiagram() {
    return `stateDiagram-v2
    [*] --> Guest
    
    state Guest {
        [*] --> ViewingSite
        ViewingSite --> Registering
        ViewingSite --> LoggingIn
        ViewingSite --> ResettingPassword
        
        state Registering {
            [*] --> EnterMobile
            EnterMobile --> OTPPending
            OTPPending --> OTPVerified
            OTPVerified --> SettingPassword
            SettingPassword --> RegistrationComplete
        }
        
        state LoggingIn {
            [*] --> EnterCredentials
            EnterCredentials --> Authenticated
            EnterCredentials --> AccountLocked
        }
        
        state ResettingPassword {
            [*] --> EnterResetMobile
            EnterResetMobile --> ResetOTPPending
            ResetOTPPending --> ResetOTPVerified
            ResetOTPVerified --> EnterNewPassword
            EnterNewPassword --> PasswordUpdated
        }
    }
    
    Guest --> Authenticated
    Authenticated --> Guest
    
    state Authenticated {
        [*] --> ActiveSession
        ActiveSession --> ChangingPassword
        ActiveSession --> SessionExpired
        ActiveSession --> ForcedLogout
        
        state ChangingPassword {
            [*] --> VerifyCurrentPassword
            VerifyCurrentPassword --> EnterNewAuthPassword
            EnterNewAuthPassword --> AuthPasswordUpdated
        }
        
        AuthPasswordUpdated --> [*]
        SessionExpired --> [*]
        ForcedLogout --> [*]
        ActiveSession --> [*]
    }`;
}

// 15. Account Lifecycle Flow
export function getAccountLifecycleFlow() {
    return `timeline
    title User Account Lifecycle
    section Account Creation
      Day 0 : Mobile Registration
          : Password Setup
          : Profile Completion
    section Active Usage
      Day 1-30 : First Login
          : First Purchase
          : Service Booking
      Day 31-90 : Regular Purchases
          : Repeat Services
          : Review Submission
    section Account Maintenance
      Day 91-180 : Password Change
          : Profile Updates
          : Communication Settings
    section Dormant Period
      Day 181-365 : Reduced Activity
          : Re-engagement Campaigns
          : Cleanup Warning
    section Account Recovery
      Beyond 365 days : Account Deactivation
          : Recovery Process
          : Data Retention`;
}

// Helper function to get all flows
export function getAllFlows() {
    return {
        systemArchitecture: getSystemArchitectureFlow(),
        authentication: getAuthenticationFlow(),
        productPurchase: getProductPurchaseFlow(),
        serviceBooking: getServiceBookingFlow(),
        adminDashboard: getAdminDashboardFlow(),
        orderFulfillment: getOrderFulfillmentFlow(),
        notification: getNotificationFlow(),
        passwordValidation: getPasswordValidationFlow(),
        databaseTransaction: getDatabaseTransactionFlow(),
        security: getSecurityFlow(),
        userJourney: getUserJourneyFlow(),
        errorHandling: getErrorHandlingFlow(),
        dataSync: getDataSyncFlow(),
        authState: getAuthStateDiagram(),
        accountLifecycle: getAccountLifecycleFlow(),
    };
}

// Example usage in HTML
export function generateHTMLWithAllFlows() {
    const flows = getAllFlows();
    let html =
        "<!DOCTYPE html><html><head><title>R K Electronics Flowcharts</title>";
    html +=
        '<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>';
    html += "<style>body { font-family: Arial, sans-serif; margin: 20px; }";
    html +=
        ".flowchart { margin: 20px 0; padding: 20px; border: 1px solid #ddd; }";
    html += "h2 { color: #2563eb; }</style></head><body>";
    html += "<h1>R K Electronics - Complete Flowcharts</h1>";

    Object.entries(flows).forEach(([key, value]) => {
        html += `<div class="flowchart"><h2>${formatTitle(key)}</h2>`;
        html += `<div class="mermaid">${value}</div></div>`;
    });

    html += "<script>mermaid.initialize({ startOnLoad: true });</script>";
    html += "</body></html>";

    return html;
}

// Helper function to format titles
function formatTitle(key) {
    return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .replace("Flow", " Flow")
        .replace("Diagram", " Diagram");
}

// Export as Node.js module if needed
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        getSystemArchitectureFlow,
        getAuthenticationFlow,
        getProductPurchaseFlow,
        getServiceBookingFlow,
        getAdminDashboardFlow,
        getOrderFulfillmentFlow,
        getNotificationFlow,
        getPasswordValidationFlow,
        getDatabaseTransactionFlow,
        getSecurityFlow,
        getUserJourneyFlow,
        getErrorHandlingFlow,
        getDataSyncFlow,
        getAuthStateDiagram,
        getAccountLifecycleFlow,
        getAllFlows,
        generateHTMLWithAllFlows,
    };
}
